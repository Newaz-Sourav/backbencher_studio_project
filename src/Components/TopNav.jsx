import React, { useState } from 'react';

export default function TopNav() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    'home', 'Why It Works', 'Features', 'How It Works', 'Testimonials',
    'Before & After', 'Science', 'FAQs', 'Shop Bundles'
  ];

  return (
    <div className="w-full px-4 md:px-8 lg:px-24 py-4 top-0 bg-white border-b border-white/50 z-50 fixed">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="w-16 h-8 bg-[url('/logo.jpg')] bg-contain bg-no-repeat bg-center" />




        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-4">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="text-zinc-950 lg:text-[10px] xl:text-[15px] 2xl:text-[19px] font-normal leading-relaxed tracking-tight font-[Montserrat] cursor-pointer hover:text-orange-500 transition"
            >
              {item}
            </div>
          ))}

          <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium font-[Montserrat] hover:bg-orange-600 transition flex items-center gap-2">
            Contact Us
            <div className="w-3.5 h-2.5 bg-neutral-900 outline outline-[1.5px] outline-offset-[-0.75px] outline-white" />
          </div>
        </div>

        {/* Hamburger icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl text-zinc-950 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-2 flex flex-col gap-2 bg-white px-4 py-2 rounded shadow">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="text-zinc-950 text-sm font-normal font-[Montserrat] cursor-pointer hover:text-orange-500 transition"
            >
              {item}
            </div>
          ))}

          <div className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium font-[Montserrat] hover:bg-orange-600 transition mt-2 text-center">
            Contact Us
          </div>
        </div>
      )}
    </div>
  );
}