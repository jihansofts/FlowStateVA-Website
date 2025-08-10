import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Packges from "@/components/Packges";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="">
        {/* Navigation - Fixed */}
        <Navbar />
        {/* Hero Section */}
        <Hero />
      </div>

      {/* Why Choose Me Section */}
      <WhyChoose />

      {/* Services Section */}
      <Services />
      {/* Packages Section */}
      <Packges />

      {/* Testimonials Section */}
      <Portfolio />

      {/* Footer */}
      <Footer />
    </div>
  );
}
