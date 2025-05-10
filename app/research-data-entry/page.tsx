import React from "react";
import ServiceList from "@/components/ServiceList";
import Image from "next/image";
export default function CustomarSupport() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
            Customer Support
          </h2>
          {/* <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-8">
            Take Control of Your Time, Maximize Your Productivity
          </h3> */}

          <div className="mb-8">
            <Image
              src="/supportblog.png"
              alt="Calendar showing April 2022"
              width={800}
              height={400}
              className="rounded-md w-full"
            />
            <p className="text-[18px] text-[#1E1E1E] mt-5">
              Providing your customers with timely, helpful, and professional
              support is key to building trust and ensuring satisfaction. Let me
              handle your customer support needs, so you can focus on growing
              your business and maintaining those important relationships.
            </p>
          </div>

          <ServiceList
            title="Services Included:"
            sections={[
              {
                title: "Multi-Channel Customer Support",
                items: [
                  {
                    text: "Email Support: I’ll handle incoming customer emails, responding with clear, helpful answers in a timely manner.",
                  },
                  {
                    text: "Live Chat Support: Whether through your website or messaging platforms, I’ll manage real-time customer inquiries with quick and efficient responses.",
                  },
                  {
                    text: "Phone Support: If your business requires phone support, I can assist with managing calls and providing excellent service to customers over the phone.",
                  },
                  {
                    text: "Social Media Support: I’ll monitor and respond to customer inquiries on social media, ensuring engagement and positive experiences across your online channels.",
                  },
                ],
              },
              {
                title: "Order & Account Management",
                items: [
                  {
                    text: "Order Inquiries: I’ll assist customers with order status, shipping updates, and returns, ensuring smooth transactions and resolving issues promptly.",
                  },
                  {
                    text: "Account Assistance: I’ll help customers with account-related issues, such as password resets, profile updates, and subscription management.",
                  },
                  {
                    text: "Refunds & Returns: I’ll manage refund requests and returns, handling them professionally and efficiently to ensure customer satisfaction.",
                  },
                ],
              },
              {
                title: "Issue Resolution & Escalation",
                items: [
                  {
                    text: "Complaint Handling: I’ll take care of any customer complaints or issues, addressing them professionally and resolving them to the best of my ability.",
                  },
                  {
                    text: "Escalation Management: If issues require higher-level intervention, I’ll follow proper escalation procedures, ensuring customers feel heard and valued throughout the process.",
                  },
                ],
              },
              {
                title: "Customer Feedback & Follow-Up",
                items: [
                  {
                    text: "Survey Distribution: I’ll send out customer satisfaction surveys, gathering feedback on their experiences to help you improve services.",
                  },
                  {
                    text: "Follow-Up Communication: I’ll reach out to customers after their issue has been resolved or their order delivered, ensuring they’re satisfied with the solution and fostering positive relationships.",
                  },
                  {
                    text: "Review Management: I’ll monitor customer reviews and feedback, responding appropriately to positive and negative comments to maintain a good reputation.",
                  },
                ],
              },
              {
                title: "Adaptable to Your Tools & Workflow",
                items: [
                  {
                    text: "I’m happy to integrate into your existing customer support platform, whether it’s a CRM system like Zendesk, Freshdesk, or any other tools you use to manage customer interactions. My goal is to fit seamlessly into your workflow for a smooth experience.",
                  },
                ],
              },
              {
                title: "How It Helps You",
                items: [
                  {
                    text: "Improved Customer Satisfaction: I’ll handle your customer interactions with professionalism, ensuring your clients feel valued and cared for.",
                  },
                  {
                    text: "Faster Response Times: With prompt and efficient support, customers will get the answers they need, enhancing their experience with your brand.",
                  },
                  {
                    text: "Stronger Customer Loyalty: Exceptional service builds lasting relationships, turning one-time customers into loyal advocates.",
                  },
                ],
              },
              {
                title: "Why Choose This Service?",
                items: [
                  {
                    text: "Customer support is critical to the success of your business. With my service, you get a dedicated, efficient support partner who will manage your customer interactions and ensure every client feels valued.",
                  },
                  {
                    text: "Get Started Today! Let me help you deliver outstanding customer support. Reach out to learn how I can make a difference for your business and keep your customers happy!",
                  },
                ],
              },
            ]}
          />
        </section>
      </main>
    </div>
  );
}
