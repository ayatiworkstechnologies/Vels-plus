import Hero from "../../components/Neet/Hero";
import NeetSection from "../../components/Neet/NeetSection";


const siteTitle = "Neet / Medical - Vels Plus Coaching in Chennai | NEET Preparation";
const siteDescription = "Prepare for NEET / Medical with Vels Plus in Chennai. Expert coaching, comprehensive study materials, and a proven track record of success in NEET exams. Join us to achieve your medical dreams.";
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

export default function neet() {
  return (
    <>
        <Hero />
        <NeetSection />
       
       
    </>
    
  );
}