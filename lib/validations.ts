import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must be under 100 characters.' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  phone: z
    .string()
    .min(7, { message: 'Phone number must be at least 7 digits.' })
    .max(20, { message: 'Phone number is too long.' })
    .regex(/^[+0-9\s\-()]+$/, { message: 'Please enter a valid phone number.' }),
  company: z
    .string()
    .min(1, { message: 'Company or Brand name is required.' })
    .max(100, { message: 'Company name must be under 100 characters.' }),
  service: z
    .string()
    .min(1, { message: 'Please select a service.' }),
  packagePlan: z
    .string()
    .min(1, { message: 'Please select a package.' }),
  budget: z
    .string()
    .min(1, { message: 'Please select an estimated budget.' }),
  projectDetails: z
    .string()
    .min(10, { message: 'Please provide at least 10 characters describing your project.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' }),
  // Honeypot field for spam prevention
  websiteHp: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
