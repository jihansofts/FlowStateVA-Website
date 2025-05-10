import React from "react";

export default function ServiceList({
  title,
  sections,
}: {
  title: string;
  sections: Array<{
    title: string;
    items: Array<{ text: string }>;
  }>;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">{title}</h3>

      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <h4 className="text-lg font-bold text-[#1E1E1E] mb-2">
            {section.title}
          </h4>
          <ul className="list-disc pl-6 space-y-4">
            {section.items.map((item, index) => (
              <li key={index}>
                <p className="font-medium text-[18px] text-[#1E1E1E] mt-5">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
