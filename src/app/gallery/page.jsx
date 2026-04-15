import PhotoGallery from "../../components/Gallery/GallerySection";
import Hero from "../../components/Gallery/Hero";


const siteTitle = "Gallery  | Vels Film City Chennai | Media and Entertainment Hub";
const siteDescription = "Explore our gallery at Vels Film City in Chennai, showcasing stunning visuals from our film productions, events, and facilities.";
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
     <PhotoGallery />
       
    </>
    
  );
}