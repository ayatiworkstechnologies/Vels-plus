import Hero from "../../components/Courses/Jee/Hero";
import JeeSection from "../../components/Courses/Jee/JeeSection";

const siteTitle = "IIT-JEE Coaching in Chennai | Vels Plus Engineering Entrance Prep";
const siteDescription = "Ace IIT-JEE Main & Advanced with Vels Plus Coaching in Chennai. Structured engineering entrance programs, top IITian faculty, comprehensive test series, and analytical problem-solving training.";
const siteImage = "/assets/jee.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: [
        "IIT JEE coaching Chennai",
        "JEE Main coaching Anna Nagar",
        "JEE Advanced coaching Velachery",
        "best engineering entrance coaching Chennai",
        "IIT coaching institute Tambaram",
        "Vels Plus JEE coaching"
    ],
    alternates: {
        canonical: "/jee",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/jee",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "IIT-JEE Entrance Coaching at Vels Plus" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function JeePage() {
  return (
    <>
        <Hero />
        <JeeSection />
    </>
  );
}