import Hero from "../components/home/Hero";
import Feature from "../components/home/Feature";

import StatsGrid from "../components/home/StatsGrid";
import FounderSection from "../components/home/FounderSection";
import WhyChooseSection from "../components/home/WhyChoose";
import KeyPoints from "../components/home/KeyPoints";
import designedoccasion from "../components/home/DesignedOccasion";
import DesignedOccasion from "../components/home/DesignedOccasion";
import Gettingtovels from "../components/home/Gettingtovels";
import ReelView from "../components/home/ReelView";
import Events from "../components/home/Events";
import Facilities from "../components/home/Facilities";
import Faqs from "../components/home/Faqs";
import HoverExpandCarousel from "../components/home/HoverExpandCarousel";
import TestimonialsCarousel from "../components/home/TestimonialsCarousel";
import NeetSection from "../components/home/Neet";
import Blog from "../components/home/Blogs";
import Welcome from "../components/home/Welcome";
import NeetCards from "../components/home/NeetCards";
import Testimonial from "../components/home/Testimonial";
import Course from "../components/home/Course";
export default function Home() {
  return (
    <>
     
                
                {/* Components rendered globally (will appear on ALL pages) */}
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
                <Blog />
                <Testimonial />
                
               
    </>
  );
}
