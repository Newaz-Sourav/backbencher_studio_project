import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import dp from "../assets/testimonial.png";

const testimonials = [
  {
    name: "Alex R",
    text: "Finally, a product that actually helps with my snoring! My partner sleeps better, and so do I.",
    rating: "4.9",
    image: dp,
  },
  {
    name: "Sophie M",
    text: "Easy to use and surprisingly effective! I can finally breathe clearly.",
    rating: "4.8",
    image: dp,
  },
  {
    name: "John D",
    text: "I've tried everything, but this actually works. Game changer!",
    rating: "5.0",
    image: dp,
  },
  {
    name: "Lara P",
    text: "It's comfortable, and I forget I&apos;m even wearing it.",
    rating: "4.7",
    image: dp,
  },
  {
    name: "Chris B",
    text: "I bought it for my husband, and we both sleep better now!",
    rating: "4.9",
    image: dp,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1; 

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - visibleCount));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < testimonials.length - visibleCount ? prev + 1 : 0
    );
  };

  return (
    <section id="testimonial-slider" className="mb-20 px-4 md:px-0">
      <h2 className="text-[48px] leading-[130%] font-semibold text-center mb-10">
        Loved by Thousands
      </h2>

      <div className="flex justify-center items-center gap-[60px] ">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="border border-[#899AB2] rounded-[100px] p-[14px]"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Slider Container */}
        <div style={{ boxShadow: "0 25px 52px -12px rgba(17, 17, 17, 0.10)" }}
         className="overflow-hidden border border-[#E9EFF7] rounded-[30px] w-[636px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[636px] bg-white p-6 rounded-[30px] "
              >
                <p className="text-[#242A33] text-[18px] leading-[160%] font-medium mb-[30px] ">
                  {item.text}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[10px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <span className="font-semibold text-[24px] leading-[130%] text-[#323B47]">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[#FF6600]">
                    <span className="text-[18px] leading-[160%] font-semibold text-[#323B47]">
                      {item.rating}
                    </span>
                    <Star size={20} fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="bg-[#FF6600] text-white rounded-[100px] p-[14px] hover:bg-orange-600"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TestimonialSlider;