import Hero from "../../components/Courses/Neet/Hero";
import NeetSection from "../../components/Courses/Neet/NeetSection";

const siteTitle = "NEET Coaching in Chennai | Vels Plus Medical Entrance Academy";
const siteDescription = "Top-rated NEET Coaching in Chennai at Vels Plus. Comprehensive Medical Entrance preparation, expert doctors & subject specialists, regular mock test series, and dedicated doubt-clearing sessions.";
const siteImage = "/assets/neet.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: [
        "NEET coaching Chennai",
        "best NEET academy Anna Nagar",
        "NEET UG coaching Velachery",
        "medical entrance coaching Chennai",
        "NEET repeater batch Chennai",
        "Vels Plus NEET coaching"
    ],
    alternates: {
        canonical: "/neet",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/neet",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "NEET Medical Entrance Coaching at Vels Plus" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function NeetPage() {
  return (
    <>
        <Hero />
        <NeetSection />
    </>
  );
}