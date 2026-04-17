import Hero from "../../components/Facilities/Hero";
import VelsPlus from "../../components/Facilities/VelsPlus";
import FacilitiesGrid from "../../components/Facilities/FacilitiesGrid";
import FacilityHighlights from "../../components/Facilities/FacilityHighlights";


const siteTitle = "Vels Facilities - Vels Plus Coaching in Chennai";
const siteDescription = "Discover the state-of-the-art facilities at Vels Plus Coaching in Chennai. Our modern classrooms, well-equipped labs, and comfortable study areas provide the perfect environment for JEE, NEET, and CBSE preparation. Experience the best learning atmosphere with us.";
const siteUrl = 'https://yourwebsite.com';
const siteImage = 'https://yourwebsite.com/default-share-image.jpg';

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: siteUrl,
        images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
    viewport: 'width=device-width, initial-scale=1',
};

export default function about() {
  return (
    <>
      <Hero />
      <VelsPlus />
       <FacilitiesGrid />
       <FacilityHighlights />
       
       
    </>
    
  );
}