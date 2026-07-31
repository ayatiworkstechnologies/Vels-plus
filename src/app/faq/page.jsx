import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/Faq/Hero";

const siteTitle = "Frequently Asked Questions (FAQ) | Vels Plus Academy";
const siteDescription = "Find answers to frequently asked questions about Vels Plus NEET, IIT-JEE, and CBSE/State Board Tuitions admissions, course structure, fee details, and batch schedules in Chennai.";
const siteImage = "/assets/hero-banner.jpg";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/faq",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/faq",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus FAQ" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function FaqPage() {
  return (
    <>
        <Hero />
        <BasicsEssential />
    </>
  );
}