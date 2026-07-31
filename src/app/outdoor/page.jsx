import BasicsEssential from "../../components/Faq/BasicEssential";
import Hero from "../../components/Outdoor/Hero";
import AboutFlim from "../../components/Outdoor/AboutFlim";
import Faq from "../../components/Outdoor/Faq";
import FilmStudio from "../../components/Outdoor/FlimStudio";
import FullBanner from "../../components/Outdoor/FullBanner";
import GettingVels from "../../components/Outdoor/GettingVels";
import OutdoorFliming from "../../components/Outdoor/OutdoorFliming";
import ReelView from "../../components/Outdoor/ReelView";
import SpecialFeatures from "../../components/Outdoor/SpecialFeatures";
import Stats from "../../components/Outdoor/Stats";
import SustainabilityTabs from "../../components/Outdoor/SustainabilityTabs";
import WhyChooseVels from "../../components/Outdoor/WhyChooseVels";

const siteTitle = "Outdoor Campus Spaces | Vels Plus Academy";
const siteDescription = "Discover the outdoor campus spaces, recreation areas, and vibrant educational environment at Vels Plus Academy in Chennai.";
const siteImage = "/assets/facilities.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/outdoor",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/outdoor",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus Outdoor Campus Facilities" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function OutdoorPage() {
  return (
    <>
        <Hero />
        <OutdoorFliming />
        <Stats />
        <FilmStudio />
        <WhyChooseVels />
        <FullBanner />
        <ReelView />
        <AboutFlim />
        <SpecialFeatures />
        <SustainabilityTabs />
        <GettingVels />
        <Faq />
    </>
  );
}