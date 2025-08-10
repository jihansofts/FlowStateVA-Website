"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
export default function Hero() {
  return (
    <div className="bg-[#FFF8F8]">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col mt-10 md:flex-row items-center justify-between">
          <div className="md:w-1/2 ">
            <h2 className=" md:text-[56px] font-extrabold text-[#1E1E1E] mb-4">
              Helping You Breathe Easier in Your Business
            </h2>
            <p className="text-[#5A5A5A] mt-5 text-[16px] font-normal">
              Hi there, I’m Daniela — a virtual assistant who is excellent at
              supporting small business owners, creatives, and entrepreneurs as
              they work to stay on top of things without the stress. I’m here to
              take care of the behind-the-scenes tasks like emails, scheduling,
              client follow-ups, content organization, digital marketing
              analytics and more, so you can focus on what you actually want to
              be doing. I’m organized, reliable, easy to communicate with, and
              always down to help you keep things running smoothly.
            </p>
            <div className="flex flex-col mt-10 sm:flex-row gap-4">
              <a target="_blank" href="https://calendly.com/flowstate-va">
                <Button className="bg-[#ffb6b6] lg:w-32 md:w-32 sm:w-full w-full h-14 hover:bg-[#ff9e9e] text-[#1E1E1E] font-medium">
                  Get Started
                </Button>
              </a>
              <a target="_blank" href="https://calendly.com/flowstate-va">
                <Button
                  variant="outline"
                  className="border-[#1E1E1E] h-14 text-[#1E1E1E]">
                  Book a Consultation
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -z-10 top-0 right-0 w-3/4 h-3/4 bg-[#d4f0e2] rounded-full opacity-50"></div>
            <Image
              src="/professional-woman-va.png"
              alt="Virtual Assistant Professional"
              width={600}
              height={600}
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
