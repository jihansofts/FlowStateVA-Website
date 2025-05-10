"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 py-2 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#FFF8F8]"
      }`}>
      <div className="container mx-auto py-4 px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-[24px] cursor-pointer font-bold text-[#0F2048]">
                FlowState VA
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium ${
                activeSection === "home"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}>
              Home
            </Link>
            <a
              href="#why-choose-me"
              className={`text-[#1E1E1E] font-medium hover:text-[#0F2048] ${
                activeSection === "why-choose-me"
                  ? "border-b-2 border-[#0F2048] text-[#0F2048]"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}>
              Why Choose Me
            </a>

            <a
              href="#services"
              className={`text-[#1E1E1E] font-medium hover:text-[#0F2048] ${
                activeSection === "services"
                  ? "border-b-2 border-[#0F2048] text-[#0F2048]"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}>
              Services
            </a>

            <a
              href="#packages"
              className={`text-[#1E1E1E] font-medium hover:text-[#0F2048] ${
                activeSection === "packages"
                  ? "border-b-2 border-[#0F2048] text-[#0F2048]"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}>
              Packages
            </a>

            <a
              href="#testimonials"
              className={`text-[#1E1E1E] font-medium hover:text-[#0F2048] ${
                activeSection === "testimonials"
                  ? "border-b-2 border-[#0F2048] text-[#0F2048]"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* CTA Button (Always visible) */}
          <div className="hidden md:block">
            <Button className="bg-[#ffb6b6] py-5 h-14 hover:bg-[#ff9e9e] text-[#1E1E1E] font-medium">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium ${
                activeSection === "home"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}
              onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <a
              href="#why-choose-me"
              className={`font-medium ${
                activeSection === "why-choose-me"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}
              onClick={() => setMenuOpen(false)}>
              Why Choose Me
            </a>
            <a
              href="#services"
              className={`font-medium ${
                activeSection === "services"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}
              onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a
              href="#packages"
              className={`font-medium ${
                activeSection === "packages"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}
              onClick={() => setMenuOpen(false)}>
              Packages
            </a>
            <a
              href="#testimonials"
              className={`font-medium ${
                activeSection === "testimonials"
                  ? "text-[#0F2048] border-b-2 border-[#0F2048]"
                  : "text-[#1E1E1E] hover:text-[#0F2048]"
              }`}
              onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <Button
              className="bg-[#ffb6b6] py-5 h-14 hover:bg-[#ff9e9e] text-[#1E1E1E] font-medium w-full"
              onClick={() => setMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
