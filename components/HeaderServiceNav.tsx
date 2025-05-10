// components/header.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto py-4 px-4">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-[24px] cursor-pointer font-bold text-[#0F2048]">
              FlowState VA
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/#why-choose-me">Why Choose Me</NavLink>
            <NavLink href="/#services" active>
              Services
            </NavLink>
            <NavLink href="/#packages">Packages</NavLink>
            <NavLink href="/#testimonials">Testimonials</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:block">
            <Button className="bg-[#ffb6b6] hover:bg-[#ff9e9e] text-[#1E1E1E] font-medium">
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <NavLink href="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink href="/#why-choose-me" onClick={() => setMenuOpen(false)}>
              Why Choose Me
            </NavLink>
            <NavLink
              href="/#services"
              active
              onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink href="/#packages" onClick={() => setMenuOpen(false)}>
              Packages
            </NavLink>
            <NavLink href="/#testimonials" onClick={() => setMenuOpen(false)}>
              Testimonials
            </NavLink>
            <Button
              className="bg-[#ffb6b6] hover:bg-[#ff9e9e] text-[#1E1E1E] font-medium w-full"
              onClick={() => setMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  active = false,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-[#1E1E1E] font-medium hover:text-[#0F2048] ${
        active ? "border-b-2 border-[#0F2048]" : ""
      }`}>
      {children}
    </Link>
  );
}
