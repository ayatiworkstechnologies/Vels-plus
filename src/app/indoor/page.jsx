import BasicsEssential from "../../components/Faq/BasicEssential";
import AboutFlim from "../../components/Indoor/AboutFlim";
import Faq from "../../components/Outdoor/Faq";
import FilmStudio from "../../components/Indoor/FlimStudio";
import FullBanner from "../../components/Indoor/FullBanner";
import GettingToVels from "../../components/Indoor/GettingToVels";
import OutdoorFliming from "../../components/Indoor/IndoorFliming";
import ReelView from "../../components/Indoor/ReelView";
import SpecialFeatures from "../../components/Indoor/SpecialFeatures";
import Stats from "../../components/Indoor/Stats";
import IndoorTabs from "../../components/Indoor/IndoorTabs";
import WhyChooseVels from "../../components/Indoor/WhyChooseVels";
import HeroSection from "../../components/Indoor/HeroSection";

const siteTitle = "Indoor Campus Facilities | Vels Plus Academy";
const siteDescription = "Explore the indoor facilities and modern learning environments at Vels Plus Academy in Chennai, designed for maximum focus, academic comfort, and interactive education.";
const siteImage = "/assets/inspired_indoors.webp";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/indoor",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/indoor",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus Indoor Learning Spaces" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function IndoorPage() {
  return (
    <>
        <HeroSection />
        <OutdoorFliming />
        <Stats />
        <FilmStudio />
        <WhyChooseVels />
        <FullBanner />
        <ReelView />
        <AboutFlim />
        <SpecialFeatures />
        <IndoorTabs />
        <GettingToVels />
        <Faq />
    </>
  );
}