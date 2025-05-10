import Image from "next/image";
import ServiceList from "@/components/ServiceList";

export default function SocialMediaManagement() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="min-h-screen bg-white pt-20">
          {/* Main Content */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
              Social Media Management & Advertising
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-8">
              Grow Your Brand, Engage Your Audience
            </h3>

            <div className="mb-8">
              <Image
                src="/socialblog.png"
                alt="Calendar showing April 2022"
                width={800}
                height={400}
                className="rounded-md w-full"
              />
              <p className="text-[18px] text-[#1E1E1E] mt-5">
                Social media is key to connecting with your audience, building
                your brand, and driving sales. But managing platforms and
                running successful ad campaigns can be time-consuming and
                complex. Let me take care of it for you—so you can focus on what
                really matters: growing your business.
              </p>
            </div>

            <ServiceList
              title="Services Included:"
              sections={[
                {
                  title: "Social Media Strategy",
                  items: [
                    {
                      text: "Custom Content Planning: I’ll create a tailored strategy to align with your business goals, identifying the best content types and posting schedules.",
                    },
                    {
                      text: "Audience Targeting: I’ll define your ideal audience and craft content that speaks directly to them, ensuring you engage the right people.",
                    },
                    {
                      text: "Brand Voice & Aesthetic: I’ll keep your messaging consistent and on-brand, giving your profiles a polished, cohesive look.",
                    },
                  ],
                },
                {
                  title: "Content Creation",
                  items: [
                    {
                      text: "Graphics & Visuals: High-quality, eye-catching visuals that reflect your brand’s style and message, including photos, graphics, and videos.",
                    },
                    {
                      text: "Captions & Copywriting: Creative and engaging copy that captures attention and sparks interaction, designed to drive engagement.",
                    },
                    {
                      text: "Hashtag Research: I’ll optimize your posts with relevant and trending hashtags to expand reach and boost visibility.",
                    },
                  ],
                },
                {
                  title: "Social Media Management",
                  items: [
                    {
                      text: "Platform Scheduling: I’ll schedule your posts across your chosen platforms to ensure consistent content delivery, even when you're busy.",
                    },
                    {
                      text: "Community Engagement: I’ll respond to comments, direct messages, and mentions to keep your audience engaged and build stronger relationships.",
                    },
                    {
                      text: "Account Monitoring: Continuous monitoring of your social accounts to ensure everything is running smoothly and adjusting strategies if needed.",
                    },
                  ],
                },
                {
                  title: "Social Media Advertising",
                  items: [
                    {
                      text: "Ad Campaign Creation: From designing compelling ads to choosing the right targeting parameters, I’ll create and launch your campaigns on platforms like Facebook, Instagram, and LinkedIn.",
                    },
                    {
                      text: "Budget Optimization: I’ll manage your ad budget to maximize ROI, ensuring your spend is effective while driving real results.",
                    },
                    {
                      text: "Performance Tracking & Reporting: I’ll analyze ad performance and adjust strategies as needed, providing you with monthly reports to track growth and engagement.",
                    },
                  ],
                },
                {
                  title: "Adaptable to Your Tools & Goals",
                  items: [
                    {
                      text: "I’ll work with the tools you already use, whether it’s scheduling platforms like Buffer or Hootsuite or analytics tools like Google Analytics or Facebook Insights. I’m flexible and ready to integrate into your existing workflow.",
                    },
                  ],
                },
                {
                  title: "How It Helps You",
                  items: [
                    {
                      text: "Stronger Online Presence: Build a consistent, recognizable brand that stands out and attracts more followers.",
                    },
                    {
                      text: "Increased Engagement & Reach: Grow your audience and drive more meaningful interactions through targeted content and ads.",
                    },
                    {
                      text: "More Time for Your Business: Free up your time while I manage the day-to-day social media tasks, keeping your accounts active and optimized.",
                    },
                  ],
                },
                {
                  title: "Why Choose This Service?",
                  items: [
                    {
                      text: "Social media is a powerful tool, but it can be overwhelming without the right strategy and consistency. With my Social Media Management & Advertising service, you get professional, hands-off support to ensure your brand shines online. Whether you’re looking to increase brand awareness, drive traffic, or generate sales, I’ll craft a strategy that gets results.",
                    },
                    {
                      text: "Get Started Today! Let’s transform your social media into a powerful asset for your business. Reach out to learn how I can help elevate your online presence!",
                    },
                  ],
                },
              ]}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
