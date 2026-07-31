import PhotoGallery from "../../components/Gallery/GallerySection";
import Hero from "../../components/Gallery/Hero";

const siteTitle = "Photo Gallery | Vels Plus Campus Life & Student Highlights";
const siteDescription = "Browse photos of Vels Plus classrooms, interactive laboratory sessions, student celebrations, and academic achievements across our Chennai coaching centers.";
const siteImage = "/assets/gal-1.webp";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/gallery",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "Vels Plus Photo Gallery" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function GalleryPage() {
  return (
    <>
      <Hero />
      <PhotoGallery />
    </>
  );
}