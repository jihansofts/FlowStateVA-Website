import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Packges from "@/components/Packges";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
