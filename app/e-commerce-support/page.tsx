import React from "react";
import ServiceList from "@/components/ServiceList";
import Image from "next/image";
export default function EcomarceSupport() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
            E-Commerce Support
          </h2>
          {/* <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-8">
            Take Control of Your Time, Maximize Your Productivity
          </h3> */}

          <div className="mb-8">
            <Image
              src="/ecommarce.png"
              alt="Calendar showing April 2022"
              width={800}
              height={400}
              className="rounded-md w-full"
            />
            <p className="text-[18px] text-[#1E1E1E] mt-5">
              Running an e-commerce business comes with its own set of
              challenges. Whether you're managing product listings, processing
              orders, or handling customer inquiries, the day-to-day tasks can
              be overwhelming. Let me take care of the details so you can focus
              on scaling your business and delighting your customers.
            </p>
          </div>

          <ServiceList
            title="Services Included:"
            sections={[
              {
                title: "Product Listings & Management",
                items: [
                  {
                    text: "Product Creation & Optimization: I’ll create and optimize your product listings, ensuring they are visually appealing and SEO-friendly to attract more traffic.",
                  },
                  {
                    text: "Inventory Tracking & Updates: Regular updates on stock levels and inventory status to ensure your store always has accurate product availability.",
                  },
                  {
                    text: "Pricing & Promotions: I’ll help manage pricing adjustments, promotions, and discount codes to boost sales and stay competitive.",
                  },
                ],
              },
              {
                title: "Order Management",
                items: [
                  {
                    text: "Order Processing: I’ll oversee the processing of orders, ensuring timely shipment and customer satisfaction.",
                  },
                  {
                    text: "Returns & Exchanges: I’ll manage returns, exchanges, and refunds, handling any customer issues professionally and efficiently.",
                  },
                  {
                    text: "Shipping & Tracking: I’ll keep customers updated on order status and track shipments to ensure timely deliveries.",
                  },
                ],
              },
              {
                title: "Customer Service",
                items: [
                  {
                    text: "Email & Chat Support: I’ll manage customer inquiries through email, live chat, and social media, providing quick and professional responses.",
                  },
                  {
                    text: "Issue Resolution: Handling any issues related to products, shipping, or payments, and ensuring customers feel heard and valued.",
                  },
                  {
                    text: "Feedback & Reviews: I’ll monitor and respond to customer reviews, turning feedback into opportunities for improvement and growth.",
                  },
                ],
              },
              {
                title: "E-Commerce Platform Management",
                items: [
                  {
                    text: "Platform Integration: I’ll ensure your store integrates seamlessly with your chosen e-commerce platform, whether it's Shopify, WooCommerce, or BigCommerce.",
                  },
                  {
                    text: "Website Maintenance: I’ll handle updates, fixes, and improvements on your e-commerce site to keep it running smoothly and efficiently.",
                  },
                  {
                    text: "Analytics & Reporting: I’ll track your sales, traffic, and customer behavior to provide insights and help refine your store's performance.",
                  },
                ],
              },
              {
                title: "Adaptable to Your Workflow",
                items: [
                  {
                    text: "Whether you’re using Shopify, WooCommerce, or any other e-commerce platform, I’m ready to adapt to your tools and systems. I can easily integrate into your existing setup, making sure your workflow remains seamless.",
                  },
                ],
              },
              {
                title: "How It Helps You",
                items: [
                  {
                    text: "Improved Efficiency: With the tedious tasks taken care of, you can focus on growing your brand and building customer relationships.",
                  },
                  {
                    text: "Higher Sales & Conversions: Optimized product listings and smooth order management lead to better customer experiences and more sales.",
                  },
                  {
                    text: "Enhanced Customer Satisfaction: Quick responses and professional customer service build trust and loyalty, leading to repeat business.",
                  },
                ],
              },
              {
                title: "Why Choose This Service?",
                items: [
                  {
                    text: "E-commerce success relies on many moving parts, and it can be difficult to keep up with everything. With my E-Commerce Support service, you’ll have a reliable partner who helps you optimize your store, manage customer interactions, and keep operations running smoothly.",
                  },
                  {
                    text: "Get Started Today! Let me take the stress out of your e-commerce business. Reach out to find out how I can help streamline your operations and boost your sales!",
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
