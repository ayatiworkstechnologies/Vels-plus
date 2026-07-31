import Hero from "../../components/Facilities/Hero";
import VelsPlus from "../../components/Facilities/VelsPlus";
import FacilitiesGrid from "../../components/Facilities/FacilitiesGrid";
import FacilityHighlights from "../../components/Facilities/FacilityHighlights";

const siteTitle = "Campus & Infrastructure | Vels Plus Facilities in Chennai";
const siteDescription = "Explore the state-of-the-art educational infrastructure at Vels Plus. Smart interactive classrooms, science labs, air-conditioned study rooms, and modern learning amenities for NEET, JEE & Tuition students.";
const siteImage = "/assets/facilities.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/facilities",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/facilities",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus Learning Facilities in Chennai" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function FacilitiesPage() {
  return (
    <>
      <Hero />
      <VelsPlus />
      <FacilitiesGrid />
      <FacilityHighlights />
    </>
  );
}