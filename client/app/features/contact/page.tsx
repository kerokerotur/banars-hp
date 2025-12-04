"use client";

// import { useState } from "react";
// import Header from "~/layout/header";
// import ContactForm from "./contact-form";
// import ContactHero from "./contact-hero";
// import Footer from "~/layout/footer";

export default function ContactPage() {
  // const [isLoading, setIsLoading] = useState(false);

  // const handleNavigate = (section: string) => {
  //   console.log(`Navigating to: ${section}`);
  // };

  // const handleJoinUs = () => {
  //   console.log("Join Us clicked");
  // };

  // const handleSocialClick = (platform: string) => {
  //   console.log(`Social media clicked: ${platform}`);
  // };

  // const handleFooterLinkClick = (link: string) => {
  //   console.log(`Footer link clicked: ${link}`);
  // };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-gray-300 text-xl max-w-2xl mx-auto">
          お問い合わせページは現在準備中です。
          近日中にお届けいたします。
        </p>
      </div>
    </div>
  );
}

// const ContactPageOriginal = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-16">
//       <ContactHero />
//       <ContactForm isLoading={isLoading} />
//     </div>
//   );
// };
