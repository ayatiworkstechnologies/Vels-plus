import Hero from "../../components/About/Hero";
import OurLegacy from "../../components/About/OurLegacy";
import VisionMission from "../../components/About/VisionMission";
import Values from "../../components/About/Values";
import Slide from "../../components/About/Slide";

const siteTitle = "About Us | Vels Plus Academy - Academic Excellence in Chennai";
const siteDescription = "Learn about Vels Plus Academy, Chennai's trusted educational coaching institute for NEET, IIT-JEE, and CBSE/State Board school tuitions. Discover our vision, mission, legacy, and expert faculty.";
const siteImage = "/assets/about.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/about",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "About Vels Plus Academy" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function About() {
  return (
    <>
        <Hero />
        <OurLegacy />
        <Slide />
        <Values />
        <VisionMission />
    </>
  );
}