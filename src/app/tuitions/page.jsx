import Hero from "../../components/Courses/Tuitions/Hero";
import TuitionSection from "../../components/Courses/Tuitions/TuitionSection";

const siteTitle = "CBSE & State Board Tuitions in Chennai | Vels Plus Academy";
const siteDescription = "Expert CBSE & State Board Tuitions for Classes 6th to 12th in Chennai. Specialized coaching in Mathematics, Physics, Chemistry, and Biology with personalized guidance at Vels Plus.";
const siteImage = "/assets/cbse.png";

export const metadata = {
    title: siteTitle,
    description: siteDescription,
    keywords: [
        "CBSE tuitions Chennai",
        "State Board tuitions Chennai",
        "Class 10 tuition Anna Nagar",
        "Class 12 Physics Chemistry Maths tuition",
        "best tuition centre Velachery",
        "school tuitions Perambur Tambaram"
    ],
    alternates: {
        canonical: "/tuitions",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/tuitions",
        images: [{ url: siteImage, width: 1200, height: 630, alt: "School Tuitions at Vels Plus Chennai" }],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: siteTitle,
        description: siteDescription,
        images: [siteImage],
    },
};

export default function TuitionsPage() {
  return (
    <>
        <Hero />
        <TuitionSection />
    </>
  );
}