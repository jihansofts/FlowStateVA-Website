"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const testimonialsData = [
  {
    name: "Kevin Martin",
    title: "Founder, TechSavior",
    image: "/avatar1.png",
    rating: "★★★★★",
    message:
      "So organized, on schedule and reliable—now I have time to focus on growing my business. A total lifesaver!",
  },
  {
    name: "Alex Thompson",
    title: "Chief Marketing Officer",
    image: "/avatar2.png",
    rating: "★★★★★",
    message:
      "Reliable, fast, and efficient! She handles my admin so I can focus on coaching. Highly recommend!",
  },
  {
    name: "Kevin Martin",
    title: "Founder, TechSavior",
    image: "/avatar1.png",
    rating: "★★★★★",
    message:
      "So organized, on schedule and reliable—now I have time to focus on growing my business. A total lifesaver!",
  },
  {
    name: "Alex Thompson",
    title: "Chief Marketing Officer",
    image: "/avatar2.png",
    rating: "★★★★★",
    message:
      "Reliable, fast, and efficient! She handles my admin so I can focus on coaching. Highly recommend!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[#F3F7F5] scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl max-w-3xl mx-auto md:text-[34px] font-bold text-[#1E1E1E] mb-4">
            Hear What Our Satisfied Clients Have to Say!
          </h2>
          <p className="text-[#5A5A5A] text-[18px] max-w-3xl mx-auto">
            Discover the transformative experiences of our valued clients as
            they share their success stories and insights about their journey
            with our services.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Custom Navigation Buttons (Top Right) */}
          <div className="flex justify-end gap-2 absolute right-0 -top-12 z-10">
            <button className="swiper-prev p-2 bg-white border rounded-full shadow">
              <FaArrowLeft className="w-4 h-4 text-[#252A2E42]" />
            </button>
            <button className="swiper-next p-2 bg-[#ffb6b6] rounded-full shadow">
              <FaArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}>
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col justify-between">
                  <p className="text-gray-700 mb-6">{`"${testimonial.message}"`}</p>
                  <div className="flex justify-between py-10 items-center">
                    <div className="flex">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-medium text-[#1E1E1E]">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-4">
                      <span className="text-[#FF8884]">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
