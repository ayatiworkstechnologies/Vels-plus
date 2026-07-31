import ReelView from "../../components/Theatre/ReelView";
import Stats from "../../components/Theatre/Stats";
import Theatre360 from "../../components/Theatre/Theatre360";
import VelsTheatreSection from "../../components/Theatre/VelsTheatreSection";
import Concession from "../../components/Theatre/Concession";
import HeroSection from "../../components/Theatre/HeroSection";
import FaqTheatre from "../../components/Theatre/Faq";
import Find from "../../components/Theatre/Find";

const siteTitle = "Audio-Visual Seminar Halls & Auditoriums | Vels Plus Academy";
const siteDescription = "Explore the audio-visual seminar halls, interactive learning auditoriums, and workshop spaces at Vels Plus Academy in Chennai.";
const siteImage = "/assets/theare.webp";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/theatre",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/theatre",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus Learning Auditoriums" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function TheatrePage() {
  return (
    <>
        <HeroSection />
        <VelsTheatreSection />
        <Stats />
        <Theatre360 />
        <ReelView />
        <Concession />
        <Find />
        <FaqTheatre />       
    </>
  );
}