import Hero from "../../components/Contact/Hero.jsx";
import ContactTabs from "../../components/Contact/ContactPage.jsx";

const siteTitle = "Contact Us | Vels Plus Academy Chennai Admissions";
const siteDescription = "Contact Vels Plus Coaching Institute in Chennai for NEET, JEE, and School Tuition admissions. Visit our centers in Anna Nagar, Perambur, Velachery, or Tambaram, or call +91 8925905619.";
const siteImage = "/assets/hero-banner.jpg";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/contact",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Contact Vels Plus Coaching Institute" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function ContactPage() {
  return (
    <>
        <Hero />
        <ContactTabs />
    </>
  );
}