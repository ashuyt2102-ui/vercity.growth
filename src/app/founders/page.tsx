import Image from "next/image";
import Link from "next/link";
export default function FoundersPage() {
 return <main><header className="page-hero"><p className="eyebrow">The people behind Vercity</p><h1>Meet the founders.</h1><p>The people building Vercity Growth and shaping its next chapter.</p></header><section className="section-pad"><div className="founder-page-grid"><article className="spatial-card"><Image src="/akash-kaushal.jpeg" alt="Akash Kaushal, Founder of Vercity Growth" width={800} height={900}/><div><p>Founder</p><h2>Akash Kaushal</h2></div></article><article className="spatial-card"><Image src="/nisha-saifi.jpeg" alt="Nisha Saifi, Co-founder of Vercity Growth" width={800} height={900}/><div><p>Co-founder</p><h2>Nisha Saifi</h2></div></article></div><Link className="button button-primary" style={{marginTop:30}} href="/about">About Vercity Growth →</Link></section></main>;
}
