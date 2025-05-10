import React from "react";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section
      id="why-choose-me"
      className="container mx-auto px-4 py-16 md:py-24 scroll-mt-24">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-2/2">
          <Image
            src="/professional-woman-laptop.png"
            alt="Virtual Assistant Working"
            width={600}
            height={700}
            className="rounded-lg mx-auto"
          />
        </div>
        <div className="md:w-2/4">
          <h2 className="text-3xl md:text-[34px] font-bold text-[#1E1E1E] mb-6">
            Why Choose Me
          </h2>
          <p className="text-[#5A5A5A] mb-4 text-[16px] font-normal">
            I'm here to take the load off your shoulders, not just check boxes
            on a to-do list. I focus on making things as easy, efficient, and
            stress-free as possible for you, saving you time and energy so you
            can focus on what matters most: growing your business.
          </p>
          <p className="text-[#333] mb-4">
            You won't have to micromanage or double-check — I take ownership of
            my work, communicate clearly, and keep things moving forward without
            adding more to your plate. I'm reliable, highly detail-oriented,
            proactive, and tuned in to what you and your business really need.
          </p>
          <p className="text-[#333]">
            Having managed projects, handled everything admin, built sales
            funnels, and kept busy businesses running smoothly, I know how much
            behind-the-scenes work it takes to keep things flowing. I also
            understand firsthand how precious your time is, especially when
            you're wearing multiple hats. My goal is to be that extra set of
            hands you can trust, so you can focus on the big picture things that
            matter most.
          </p>
        </div>
      </div>
    </section>
  );
}
