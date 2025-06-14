"use client";

import type React from "react";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: string[];
}

interface ContactInfoProps {
  onLocationClick?: () => void;
  onPhoneClick?: (phone: string) => void;
  onEmailClick?: (email: string) => void;
}

export default function ContactInfo({
  onLocationClick,
  onPhoneClick,
  onEmailClick,
}: ContactInfoProps) {
  const contactItems: ContactInfoItem[] = [
    {
      icon: MapPin,
      title: "Location",
      content: ["123 Baseball Avenue", "Sports City, SC 12345"],
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["(555) 123-4567"],
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@risingstars.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    },
  ];

  const handleItemClick = (title: string, content: string) => {
    switch (title) {
      case "Location":
        onLocationClick?.();
        break;
      case "Phone":
        onPhoneClick?.(content);
        break;
      case "Email":
        onEmailClick?.(content);
        break;
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {contactItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="bg-[#2C1220] p-6 rounded-lg text-center hover:bg-gray-750 transition-colors"
          >
            <Icon className="w-8 h-8 text-pink-500 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">{item.title}</h3>
            {item.content.map((line, index) => (
              <p
                key={index}
                className={`text-gray-300 text-sm ${
                  item.title === "Phone" ||
                  item.title === "Email" ||
                  item.title === "Location"
                    ? "cursor-pointer hover:text-pink-400 transition-colors"
                    : ""
                }`}
                onClick={() => {
                  if (
                    item.title === "Phone" ||
                    item.title === "Email" ||
                    item.title === "Location"
                  ) {
                    handleItemClick(item.title, line);
                  }
                }}
              >
                {line}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}
