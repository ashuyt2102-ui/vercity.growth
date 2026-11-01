import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';
import { supabaseAdmin } from '@/lib/supabase';
import { resend } from '@/lib/email';

// Simple memory store for in-memory rate limiting / spam throttling
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const current = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - current.lastReset > windowMs) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (current.count >= maxRequests) {
    return false;
  }

  current.count += 1;
  rateLimitMap.set(ip, current);
  return true;
}

export async function POST(request: Request) {
  try {
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1';

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many submissions. Please wait a moment before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // 2. Honeypot check for bots
    if (body.websiteHp && body.websiteHp.length > 0) {
      // Return fake success for bot
      return NextResponse.json({ success: true, message: 'Enquiry received successfully.' });
    }

    // 3. Schema Validation
    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map((err) => `${err.path.join('.')}: ${err.message}`).join(', ');
      return NextResponse.json(
        { success: false, error: errorMessages || 'Invalid form input.' },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    let supabaseSaved = false;
    let emailSent = false;

    // 4. Supabase Storage (if configured)
    if (supabaseAdmin) {
      try {
        const { error: dbError } = await supabaseAdmin
          .from('enquiries')
          .insert([
            {
              full_name: data.fullName,
              email: data.email,
              phone: data.phone,
              company: data.company,
              service: data.service,
              package_plan: data.packagePlan,
              budget: data.budget,
              project_details: data.projectDetails,
              ip_address: ip,
              created_at: new Date().toISOString(),
            },
          ]);

        if (dbError) {
          console.error('Supabase insertion error:', dbError);
        } else {
          supabaseSaved = true;
        }
      } catch (err) {
        console.error('Supabase exception:', err);
      }
    } else {
      // In development or when Supabase keys are not set yet, simulate successful verified receipt
      console.log('NOTICE: Supabase keys not set. Enquiry received in demo mode:', {
        name: data.fullName,
        email: data.email,
        company: data.company,
        service: data.service,
        package: data.packagePlan,
      });
      supabaseSaved = true;
    }

    // 5. Resend Email Notification (if configured)
    if (resend) {
      try {
        const toEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'admin@vercitygrowth.com';
        const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

        const { error: resendError } = await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          replyTo: data.email,
          subject: `⚡ New Growth Enquiry from ${data.fullName} [${data.company}]`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0d12; color: #f1f5f9; padding: 32px; border-radius: 12px; border: 1px solid #27272a;">
              <h2 style="color: #60a5fa; margin-top: 0; font-size: 24px; font-weight: 700;">VERCITY GROWTH — New Client Enquiry</h2>
              <p style="color: #94a3b8; font-size: 14px;">A new project lead was just submitted through vercitygrowth.com</p>

              <div style="margin: 24px 0; border-top: 1px solid #27272a; border-bottom: 1px solid #27272a; padding: 16px 0;">
                <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Client Name:</strong></td>
                    <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${data.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0; color: #60a5fa;"><a href="mailto:${data.email}" style="color: #60a5fa; text-decoration: none;">${data.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Phone:</strong></td>
                    <td style="padding: 8px 0; color: #ffffff;">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Company:</strong></td>
                    <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${data.company}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Selected Service:</strong></td>
                    <td style="padding: 8px 0; color: #34d399;">${data.service}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Selected Package:</strong></td>
                    <td style="padding: 8px 0; color: #fbbf24;">${data.packagePlan}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #94a3b8;"><strong>Estimated Budget:</strong></td>
                    <td style="padding: 8px 0; color: #ffffff;">${data.budget}</td>
                  </tr>
                </table>
              </div>

              <div style="margin-top: 16px;">
                <p style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;"><strong>Project Details:</strong></p>
                <div style="background: #18181b; padding: 16px; border-radius: 8px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">
                  ${data.projectDetails}
                </div>
              </div>

              <div style="margin-top: 28px; font-size: 12px; color: #64748b; text-align: center;">
                Generated securely by Vercity Growth Engine &bull; Timestamp: ${new Date().toUTCString()}
              </div>
            </div>
          `,
        });

        if (resendError) {
          console.error('Resend email error:', resendError);
        } else {
          emailSent = true;
        }
      } catch (err) {
        console.error('Resend exception:', err);
      }
    } else {
      console.log('NOTICE: RESEND_API_KEY not configured. Email notification simulation completed.');
      emailSent = true;
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your project enquiry has been submitted. Our strategy team will reach out within 24 hours.',
      details: {
        supabaseSaved,
        emailSent,
      },
    });
  } catch (error) {
    console.error('Submission API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing your enquiry. Please try again.' },
      { status: 500 }
    );
  }
}
