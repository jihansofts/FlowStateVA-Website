"use client";
import React from "react";
import Image from "next/image";
export default function Portfolio() {
  return (
    <section id="testimonials" className="py-16 bg-[#F3F7F5] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-5">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
              Check Out My Portfolio
            </h3>
            <p className="text-[16px] text-[#5A5A5A] font-normal leading-relaxed">
              As a dedicated Virtual Assistant, I specialize in helping small
              business owners, creatives, and entrepreneurs stay organized and
              stress-free. From managing emails, scheduling, and client
              follow-ups to content organization, digital marketing analytics,
              and other behind-the-scenes tasks, I ensure your operations run
              smoothly. I’m known for being reliable, highly organized, and easy
              to communicate with, allowing you to focus on what truly
              matters—growing your business and doing what you love.
            </p>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1qHc2b0xESgRAiyFc7vYe8Rp298xZ3Yht/view?usp=sharing"
              className="bg-[#FFD1D1] max-w-[300px] text-[#0F2048] text-[16px] font-bold px-6 py-3 rounded-md">
              Please click to view my portfolio
            </a>
          </div>
          <div className="relative w-fit mx-auto">
            <Image
              src="/portfolio.png"
              alt="Virtual Assistant Working"
              width={600}
              height={700}
              className="rounded-md mx-auto "
            />
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1qHc2b0xESgRAiyFc7vYe8Rp298xZ3Yht/view?usp=sharing"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
               bg-white text-[#0F2048] font-bold px-6 py-3 rounded-md shadow-lg">
              Check Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
