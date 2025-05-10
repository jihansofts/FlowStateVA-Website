import ServiceList from "@/components/ServiceList";
import Image from "next/image";
export default function EmailCalendarManagement() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
            Email and Calendar Management
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-8">
            Take Control of Your Time, Maximize Your Productivity
          </h3>

          <div className="mb-8">
            <Image
              src="/email.png"
              alt="Calendar showing April 2022"
              width={800}
              height={400}
              className="rounded-md w-full"
            />
            <p className="text-[18px] text-[#1E1E1E] mt-5">
              Managing emails and staying on top of your calendar can be
              overwhelming, especially when you’re juggling a million other
              things. Let me handle the details so you can focus on what matters
              most—whether that’s growing your business, meeting with clients,
              or spending more time with loved ones.
            </p>
          </div>

          <ServiceList
            title="Services Included:"
            sections={[
              {
                title: "Email Management",
                items: [
                  {
                    text: "Inbox Triage: I’ll sort, filter, and prioritize emails based on importance, ensuring you never miss an important message.",
                  },
                  {
                    text: "Responding & Flagging: I’ll handle replies to routine emails, flagging critical ones for your attention.",
                  },
                  {
                    text: "Unsubscribe & Cleanup: I’ll tidy up your inbox by unsubscribing from unnecessary lists and managing spam.",
                  },
                ],
              },
              {
                title: "Calendar Management",
                items: [
                  {
                    text: "Scheduling & Rescheduling: I’ll take care of booking appointments, meetings, and calls, making sure there are no scheduling conflicts.",
                  },
                  {
                    text: "Reminders & Alerts: Never forget an important event. I’ll send reminders and alerts for upcoming meetings or deadlines.",
                  },
                  {
                    text: "Time Blocking: Organize your calendar with blocks of focused time for different tasks, ensuring maximum productivity and minimal distractions.",
                  },
                ],
              },
              {
                title: "Task Management",
                items: [
                  {
                    text: "Daily Briefing: At the start of each day, I’ll send you a summary of your schedule and important emails, so you’re always prepared.",
                  },
                  {
                    text: "Follow-Ups & Deadlines: I’ll keep track of upcoming deadlines and follow up on pending items to ensure nothing slips through the cracks.",
                  },
                ],
              },
              {
                title: "Adaptable to Your Workflow:",
                items: [
                  {
                    text: "If you use specialized tools or platforms to manage your email or calendar, I’m happy to adapt to your workflow. Whether it’s Outlook, Google Workspace, or other tools, I’ll seamlessly integrate into your existing systems.",
                  },
                ],
              },
              {
                title: "How It Helps You:",
                items: [
                  {
                    text: "Maximized Productivity: Spend less time on repetitive email and scheduling tasks and more time on high-priority work.",
                  },
                  {
                    text: "Reduced Stress: With an organized inbox and calendar, you’ll never feel overwhelmed by an overflowing schedule again.",
                  },
                  {
                    text: "Better Work-Life Balance: Focus on your business and personal life without worrying about managing time-consuming details.",
                  },
                ],
              },
              {
                title: "Why Choose This Service?",
                items: [
                  {
                    text: "With my Email and Calendar Management service, you get a customized, hands-off solution to keep your inbox and schedule running smoothly. Whether you’re a busy entrepreneur, small business owner, or professional with a packed calendar, I’ll help you stay on top of things with minimal effort.",
                  },
                  {
                    text: "Get Started Today - Take back your time. Reach out to learn more about how I can help simplify your daily tasks",
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
