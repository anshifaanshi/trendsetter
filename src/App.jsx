
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";

import OurLatestCreations from "./sections/our-latest-creations";
import OurTestimonialSection from "./sections/our-testimonials-section";

import Newsletter from "./sections/newsletter";

export default function App() {
    return (
        <>
            <LenisScroll />
     
            <Navbar />
            <main className='px-4'>
                <HeroSection />
         
                <OurLatestCreations />
                <OurTestimonialSection />
         
            
            </main>
          
        </>
    );
}
