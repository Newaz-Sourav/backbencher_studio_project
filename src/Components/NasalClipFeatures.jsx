import React , { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img1 from "../assets/nasalClipImg1.png" 
import img2 from "../assets/nasalClipImg2.png" 

const NasalClipFeatures = () => {
    const images = [img1, img2, img2, img2]; // Add more if needed
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };


  return (
    <section id="why" className="pt-10 pb-[71px] ">
      <div className="w-full flex flex-col justify-center items-center " >
        <h2 className="text-[48px] text-[#070707] leading-[130%] max-w-[500px] font-semibold text-center mb-[25px] ">
            Why Choose Our Nasal Clip?
        </h2>
        
      </div>

      {/* Image Grid + Arrows */}
      <div className=" w-full relative overflow-hidden">
        <div className="w-full relative flex flex-col justify-center items-center " >
            <p className="text-center text-[16px] leading-[160%] max-w-[634px]  text-[#070707] mb-8 ">
                Our nasal clip provides a simple, effective solution for snoring, congestion,
                and improved airflow during activities, offering comfort and relief.
            </p>
            {/* Arrows */}
            <div className="absolute top-[35px] transform -translate-y-1/2 right-0 hidden md:flex space-x-4">
                <button
                onClick={handlePrev}
                className="bg-white border border-[#FF6600] rounded-[108px] p-[8.7273px] shadow hover:bg-[#FF6600] "
                >
                <ArrowLeft size={24} />
                </button>
                <button
                onClick={handleNext}
                className="bg-[#FF6600] text-white hover:text-[#FF6600] rounded-[108px] p-[8.7273px] hover:border-[#FF6600] hover:border hover:bg-white "
                >
                <ArrowRight size={24} />
                </button>
            </div>
        </div>

        <div className="flex gap-6 h-[408px] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((img, idx) => (
            <div className="left-[176px] min-w-[795px] relative bottom-0 " >
                <div key={idx} className="min-w-full h-[408px] ">
                    <img src={img} alt={`Slide ${idx}`} className="w-[795px] h-[408px] object-cover rounded-2xl" />
                </div>
            </div>
            ))}
        </div>

        <div className="absolute bottom-0 left-0 mb-[18px] text-black">
            <h3 className="text-[40px] leading-[130%] text-[#070707] font-semibold">Reduces Snoring</h3>
            <p className="text-[16px] max-w-[485px] leading-[160%] font-medium text-[#070707] mt-4">
                Our nasal clip is scientifically designed to fits seamlessly into your daily routine.
            </p>
        </div>

      </div>

      {/* Dots */}
      <div className="dotsContainer flex gap-4 mt-6">
        {images.map((_, idx) => (
        <span
            key={idx}
            className={`h-2 w-[52px] rounded-full transition-all duration-300 ${
            currentIndex === idx ? 'bg-[#FF6600]' : 'bg-[#FFB98A]'
            }`}
        ></span>
        ))}
      </div>
      
    </section>
  );
};

export default NasalClipFeatures;