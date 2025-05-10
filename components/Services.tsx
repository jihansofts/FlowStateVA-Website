import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Services() {
  return (
    <section
      id="services"
      className="container mx-auto px-4 py-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="md:text-[50px] sm:-text-[40px] text-[30px]  font-bold text-[#1E1E1E] mb-2">
          Unveiling My Comprehensive <br /> Range of Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Email and Calendar Management Card */}
        <Link href="/email-calendar-management" className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-[300px] w-full">
              <Image
                src="/email.png"
                alt="Email and calendar management"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-[#1E1E1E]" />
              </div>
            </div>
            <div className="p-6 bg-[#ffb6b6] bg-opacity-20 flex-grow flex items-center">
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                Email and calendar management
              </h3>
            </div>
          </div>
        </Link>

        {/* Social Media Management Card */}
        <Link href="/social-media-management" className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-[300px] w-full">
              <Image
                src="/socialblog.png"
                alt="Social Media Management and Advertising"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-[#1E1E1E]" />
              </div>
            </div>
            <div className="p-6 bg-[#ffb6b6] bg-opacity-20 flex-grow flex items-center">
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                Social Media Management and Advertising
              </h3>
            </div>
          </div>
        </Link>

        {/* E-Commerce Support Card */}
        <Link href="/e-commerce-support" className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-[300px] w-full">
              <Image
                src="/ecommarce.png"
                alt="E-Commerce Support"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-[#1E1E1E]" />
              </div>
            </div>
            <div className="p-6 bg-[#ffb6b6] bg-opacity-20 flex-grow flex items-center">
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                E-Commerce Support
              </h3>
            </div>
          </div>
        </Link>

        {/* Research and Data Entry Card */}
        <Link href="/research-data-entry" className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-[300px] w-full">
              <Image
                src="/data-research-spreadsheets.png"
                alt="Research and data entry"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-[#1E1E1E]" />
              </div>
            </div>
            <div className="p-6 bg-[#ffb6b6] bg-opacity-20 flex-grow flex items-center">
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                Research and data entry
              </h3>
            </div>
          </div>
        </Link>
        {/* Customer Support Card */}
        <Link href="/customer-support" className="group">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="relative h-[300px] w-full">
              <Image
                src="/customer-support-service-desk.png"
                alt="Customer support"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                <ArrowRight className="h-5 w-5 text-[#1E1E1E]" />
              </div>
            </div>
            <div className="p-6 bg-[#ffb6b6] bg-opacity-20 flex-grow flex items-center">
              <h3 className="text-xl font-bold text-[#1E1E1E]">
                Customer support
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
