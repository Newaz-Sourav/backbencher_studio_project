import React from "react";
import r1 from "../assets/r1.png"
import r2 from "../assets/r2.png"
import r3 from "../assets/r3.png"
import rv1 from "../assets/rv1.png"
import rv2 from "../assets/rv2.png"

import securityCheck from "../assets/security-check.png"
import { Star, Heart } from "lucide-react";



const reviews = [
  {
    name: "Arlene McCoy",
    image: r1,
    time: "1 Week Ago",
    text: "This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and barely noticeable!",
    imageReview: rv1,
  },
  {
    name: "Ralph Edwards",
    image: r2,
    time: "1 Week Ago",
    text: "I use this nasal clip during my runs, and it really improves airflow. I can breathe more freely and last longer during intense sessions.",
    imageReview: rv1,
  },
  {
    name: "Cameron Williamson",
    image: r3,
    time: "1 Week Ago",
    text: "I've been using the nasal clip to combat my chronic nasal congestion, and it's made a world of difference. Highly effective and comfortable!",
    imageReview: rv2,
  },
];

export default function Reviews() {
    return (
    <div className=" mt-10">
        <h2 className="text-[36px] text-[#161721] leading-[100%] font-bold mb-[56px] ">Customer Feedback</h2>
        {reviews.map((review, idx) => (
            <div
            key={idx}
            className="border-t border-[#77C67B5E] py-6 flex gap-4 flex-col md:items-start justify-between"
            >
            <div className="flex w-full justify-between items-center ">
                <div className="flex justify-center items-center gap-4">
                    <img
                    src={review.image}
                    alt={review.name}
                    className="w-15 h-15 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-bold text-[40px] leading-[100%] text-[#161721] flex items-center gap-4 ">
                            {review.name}
                            <img src={securityCheck} className="w-8 h-8  " />
                        </h3>
                    </div>
                </div>
                <div className="leading-[100%] font-[400] border border-[#C3DAD6] text-[18px] text-[#014955] bg-[#9FCBCC3B] px-6 py-3 rounded-[10px] whitespace-nowrap">
                    {review.time}
                </div>
            </div>

            <div>
                <div className="flex gap-[10px] items-center ">
                    <Star size={24} className="text-[#FAAF3E] " fill="currentColor" />
                    <Star size={24} className="text-[#FAAF3E] " fill="currentColor" />
                    <Star size={24} className="text-[#FAAF3E] " fill="currentColor" />
                    <Star size={24} className="text-[#FAAF3E] " fill="currentColor" />
                    <Star size={24} className="text-[#FAAF3E] " fill="currentColor" />
                    <div className="mx-4 border-r-2 h-6 border-[#A5A5AB]"></div>
                    <Heart size={32} className="text-[#CB3B4E] " fill="currentColor" />
                    <p className="ml-[2px] text-[18px] font-[500] leading-[16px] text-[#1D1F2C] " >(1.5K)</p>
                </div>
                <p className="mt-4 max-w-[825px] text-[20px] font-[400] leading-[140%] text-[#4A4C56] ">{review.text}</p>
            </div>
            
            <img
                src={review.imageReview}
                alt="product usage"
                className="w-[233px] h-[188px] object-cover mt-0 "
            />
            </div>
        ))}
    </div>

    );
}