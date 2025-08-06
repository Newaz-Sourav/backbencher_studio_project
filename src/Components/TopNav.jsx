import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function TopNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
  { name: "home", id: "home" },
  { name: "Why It Works", id: "why" },
  { name: "Features", id: "features" },
  { name: "How It Works", id: "how-it-works" },
  { name: "Testimonials", id: "testimonial-slider" },
  { name: "Before & After", id: "before-after" },
  { name: "Science", id: "science" },
  { name: "FAQs", id: "faqs" },
  { name: "Shop Bundles", id: "shop-bundles" },
];

  return (
    <div className="w-full fixed top-0 bg-white z-50 px-[104px]">
      <div className="flex flex-row w-full min-h-[49px] my-4 items-center justify-between">
        {/* Logo */}
        <div className="w-[67.6325px] h-[32px] bg-[url('/logo.jpg')] bg-contain bg-no-repeat bg-center" />

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-4">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="flex pt-[12px] pb-[11px] px-2 cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(false); // close mobile menu on click
                const target = document.getElementById(item.id);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="font-[400] text-[#070707] text-[16px] leading-[160%] tracking-[0.5%]">
                {item.name}
              </span>
            </div>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false); // closes mobile menu
              const target = document.getElementById("contact-us");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex cursor-pointer ml-2 bg-[#FF6600] text-white rounded-[100px] border border-[#000000] py-[14px] pl-[26px] pr-4 gap-[8px] hover:bg-orange-600 transition"
          >
            <span className="font-medium text-[16px] leading-[160%] text-white">
              Contact Us
            </span>
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Mobile menu icon */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 mb-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <div
                key={idx}
                className="flex pt-[12px] pb-[11px] px-2 cursor-pointer"
                onClick={() => {
                  setIsMobileMenuOpen(false); // close mobile menu on click
                  const target = document.getElementById(item.id);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="font-[400] text-[#070707] text-[16px] leading-[160%] tracking-[0.5%]">
                  {item.name}
                </span>
              </div>
            ))}

            <button
              onClick={() => {
                setIsMobileMenuOpen(false); // closes mobile menu
                const target = document.getElementById("contact-us");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex cursor-pointer ml-2 bg-[#FF6600] text-white rounded-[100px] border border-[#000000] py-[14px] pl-[26px] pr-4 gap-[8px] hover:bg-orange-600 transition"
            >
              <span className="font-medium text-[16px] leading-[160%] text-white">
                Contact Us
              </span>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}