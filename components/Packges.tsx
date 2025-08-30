import React from "react";
import { Button } from "@/components/ui/button";

export default function Packages() {
  return (
    <section
      id="packages"
      className="container mx-auto px-4 py-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E]">
          My Packages
        </h2>
      </div>

      {/* Packages Card Grid */}
      <div className="relative rounded-3xl p-6 md:px-12  ">
        <div className="absolute inset-0  bg-[#ffb6b6]  h-[400px] z-[-1] w-full rounded-3xl"></div>
        <div className="grid grid-cols-1 justify-end items-end md:grid-cols-3 pt-10 gap-6">
          {/* Basic Package */}
          <div className="bg-white border border-[#093A3E52] lg:h-[500px] md:h-[500px] sm:h-auto h-auto px-12 rounded-2xl p-6 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] font-bold text-center text-[#1E1E1E] mb-2">
                Basic
              </h3>
              <h1 className="text-[50px] font-bold text-center text-[#1E1E1E] mb-1">
                $300
              </h1>
              <p className="text-center text-[#1E1E1E] mb-4 text-[24px] font-medium">
                10 Hours/Month
              </p>
              <p className="text-[16px] text-[#1E1E1E] text-center">
                Perfect for busy entrepreneurs who need a little extra support
                without a full-time commitment. This package gives you 10
                flexible hours a month to delegate tasks like email and calendar
                management, social media scheduling, light customer service,
                simple research, and other admin work. I’ll help you stay
                organized, save time, and keep things moving—so you can focus on
                growing your business.
              </p>
            </div>
          </div>

          {/* Premium Package */}
          <div className="bg-[#0a1e3d] relative lg:h-[600px] md:h-[600px] sm:h-auto h-auto  px-12 text-white rounded-xl p-6 flex flex-col justify-between">
            <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-fit px-4 py-1 bg-white text-[#0a1e3d] text-xs font-semibold rounded-full shadow">
              Most Popular
            </div>
            <div>
              <h3 className="text-[24px] font-bold text-center text-[#ffffff] mb-2">
                Standard
              </h3>
              <p className="text-[50px] font-bold text-center text-[#ffffff] mb-1">
                $550
              </p>
              <p className="text-center text-[#ffffff] mb-4 text-[24px] font-medium">
                20 Hours/Month
              </p>
              <p className="text-[16px] text-[#ffffff] text-center">
                Designed for companies and small teams ready to level up. With
                20 hours of support each month, you’ll get a powerful mix of
                three general services—like inbox and calendar management,
                social media scheduling, and client follow-ups—plus one
                specialized service tailored to your needs, such as paid ad
                management, systems setup, or light design work. It’s the
                perfect blend of admin help and expert support to keep your
                business running smoothly and professionally.
              </p>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white border border-[#093A3E52] lg:h-[500px] md:h-[500px] sm:h-auto h-auto px-12  rounded-2xl p-6  flex flex-col justify-between">
            <div>
              <h3 className="text-[24px] font-bold text-center text-[#1E1E1E] mb-2">
                Premium
              </h3>
              <h1 className="text-[50px] font-bold text-center text-[#1E1E1E] mb-1">
                $1000
              </h1>
              <p className="text-center text-[#1E1E1E] mb-4 text-[24px] font-medium">
                40 Hours/Month
              </p>
              <p className="text-[16px] text-[#1E1E1E] text-center">
                For the established entrepreneur or CEO ready to reclaim their
                time and focus on visionary growth. This all-inclusive package
                integrates a true partner into your operations. With 40 hours of
                dedicated monthly support, I’ll proactively manage entire
                workflows, from complex project management and team coordination
                to system optimization and strategic planning. Consider your
                operational heavy lifting handled, giving you the freedom to
                lead and scale your business with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Pricing Options */}
      <div className="grid grid-cols-1   md:grid-cols-3 px-12 gap-6">
        {/* Hourly Pricing */}
        <div className="bg-white border border-[#093A3E52]  px-12 rounded-2xl p-6  flex flex-col">
          <h3 className="text-xl font-bold text-center text-[#1E1E1E] mb-4">
            Hourly Pricing
          </h3>
          <ul className="space-y-3">
            <p className="text-center text-[16px] text-[#1E1E1E]">Example:</p>
            <li className="flex items-start">
              <div className="h-5 w-5 rounded-full border border-gray-400 mt-0.5 mr-2"></div>
              <span className="text-[16px] text-[#1E1E1E]">
                General admin: $35/hour
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="min-w-[20px] h-5 w-5 rounded-full border border-gray-400 mt-1"></div>
              <span className="flex-1  text-[16px] text-[#1E1E1E]">
                Specialized service (e.g., social media or marketing support):
                $40/hour
              </span>
            </li>
          </ul>
        </div>

        {/* Project-Based Pricing */}
        <div className="border border-[#093A3E52] rounded-lg p-6 flex flex-col ">
          <h3 className="text-xl font-bold text-center text-[#1E1E1E] mb-4">
            Project-Based Pricing
          </h3>
          <ul className="space-y-3">
            <p className="text-center text-[16px] text-[#1E1E1E]">Example:</p>
            <li className="flex items-start gap-2">
              <div className="min-w-[20px] h-5 w-5 rounded-full border border-gray-400 mt-1"></div>
              <span className=" text-[16px] text-[#1E1E1E]">
                Social media audit and scheduling for one month: $350
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="min-w-[20px] h-5 w-5 rounded-full border border-gray-400 mt-1"></div>
              <span className=" text-[16px] text-[#1E1E1E]">
                Organizing and updating a calendar and email system for a
                business for one month: $200-500 (depending on size)
              </span>
            </li>
          </ul>
        </div>

        {/* Add-On Services */}
        <div className="border border-[#093A3E52] rounded-lg p-6 flex flex-col ">
          <h3 className="text-xl font-bold text-center text-[#1E1E1E] mb-4">
            Add-On Services
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full border border-gray-400 mt-0.5 mr-1"></div>
              <span>Rush delivery: +25% of project cost</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="min-w-[20px] h-5 w-5 rounded-full border border-gray-400 mt-1"></div>
              <span>
                Advanced tasks (e.g., analytics, website updates): +$10–$20/hour
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Optional Button */}
      <div className="text-center mt-10">
        <a target="_blank" href="https://calendly.com/flowstate-va">
          <Button
            variant="outline"
            className="bg-[#FFD1D1] text-[16px] h-14 w-[220px] font-bold text-[#0F2048]">
            Book a Consultation
          </Button>
        </a>
      </div>
    </section>
  );
}
