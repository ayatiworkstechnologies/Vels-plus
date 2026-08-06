import type { Metadata } from "next";
import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";
import FounderSection from "../components/home/FounderSection";
import WhyChooseSection from "../components/home/WhyChoose";
import KeyPoints from "../components/home/KeyPoints";
import Gettingtovels from "../components/home/Gettingtovels";
import ReelView from "../components/home/ReelView";
import Events from "../components/home/Events";
import Facilities from "../components/home/Facilities";
import NeetSection from "../components/home/Neet";
import Blog from "../components/home/Blogs";
import Welcome from "../components/home/Welcome";
import NeetCards from "../components/home/NeetCards";
import Testimonial from "../components/home/Testimonial";
import Course from "../components/home/Course";

export const metadata: Metadata = {
  title: "Vels Plus | Best NEET, IIT-JEE & School Tuition Coaching Centre in Chennai",
  description: "Join Vels Plus for top-rated NEET UG, IIT-JEE, and CBSE/State Board school tuitions in Chennai. Comprehensive coaching, expert faculty, modern facilities & proven results in Anna Nagar, Perambur, Velachery, and Tambaram.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vels Plus | Premier Coaching Institute in Chennai for NEET, JEE & Tuitions",
    description: "Empowering students for success in NEET, IIT-JEE & school board exams across Chennai. Enroll today at Vels Plus Academy.",
    url: "/",
    images: [{ url: "/assets/hero-banner.jpg", width: 1200, height: 630, alt: "Vels Plus Coaching Centre Chennai" }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <NeetCards />
      <Feature />
      <FounderSection />
      <Course />
      <WhyChooseSection />
      <ReelView />
      <KeyPoints />
      <Facilities />
      <NeetSection />
      <Gettingtovels />
      <Events />
      {/* <Blog />
      <Testimonial /> */}
    </>
  );
}
