import React, { useState } from 'react';
import h1Big from "../assets/h1Big.png"
import h2 from "../assets/h2.png"
import h3 from "../assets/h3.png"
import h4 from "../assets/h4.png"
import iPay from "../assets/iPay.png"
import gPay from "../assets/gPay.png"
import vPay from "../assets/vPay.png"
import sPay from "../assets/sPay.png"
import vsPay from "../assets/vsPay.png"
import { ChevronDown } from "lucide-react";


const Page2 = () => {
  const [selectedImage, setSelectedImage] = useState(h1Big);

  const images = [
    h1Big,
    h2,
    h3,
    h4,
  ];

  const benefits = [
    'Boost performance',
    'Stop snoring',
    'Optimized Airflow',
    '100% Drug Free'
  ];

  const infoItems = [
    'Sizing information',
    'Free resizing',
    'Money back guarantee & free returns'
  ];

  const paymentIcons = [
    iPay,
    gPay,
    vPay,
    sPay,
    vsPay,
  ];

  const infoItemsA = [
  {
    title: "Sizing information",
    content: "Details about sizing go here."
  },
  {
    title: "Free resizing",
    content: "You can resize your product for free."
  },
  {
    title: "Money back guarantee & free returns",
    content: "We offer full refunds and free returns within 30 days."
  }
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };


  return (
    <div className="w-full py-[80px] flex flex-col lg:flex-row items-center justify-center gap-[64px]">
      
      {/* Left: Image Gallery */}
      <div className="flex flex-col gap-[24px] ">
        
        {/* Main Image Preview */}
        <div className=" flex justify-center items-center w-[526px] h-[607px] rounded-[24px] border border-[#FFD0B0] bg-[#FFF0E6]">
          <img
            src={selectedImage}
            alt="Selected preview"
            className=" w-[510.9098px] h-[589.5861px] object-cover "
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-[24px] w-full ">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`w-[113.5px] h-[122px] flex justify-center items-center cursor-pointer rounded-[4px] transition duration-200 ${
                selectedImage === img ? 'bg-[#6B2B00] border-4 border-[#FF6600] ' : 'bg-[#F8FAFB] '
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-[109.1346px] h-[117.3077px] object-cover "
              />
            </div>
          ))}
        </div>
      </div>

       <div className="flex flex-col max-w-[626px] flex-grow ">
        
        {/* Ratings + Title */}
        <div className='flex flex-col gap-3 '>
          <div className="flex items-center gap-2 ">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-[url('/star.png')] bg-cover bg-no-repeat" />
              ))}
            </div>
            <div className="text-[18px] leading-[160%] font-semibold text-black">4.5</div>
            <div className="text-[16px] font-[400] leading-[160%] text-[#1D1F2C] ">(500+ Reviews)</div>
          </div>
          <h1 className="text-[40px] font-semibold font-montserrat text-[#12151A] leading-[130%] ">
            Noseclip
          </h1>
        </div>

        {/* Price */}
        <div className="flex  items-center gap-[8px] mb-8 ">
          <span className="text-[48px] font-semibold leading-[130%] font-montserrat text-[#6B2B00] ">
            $12.00
          </span>
          <span className="text-[24px] leading-[130%] font-medium text-[#12151A] line-through">
            $20.00
          </span>
          <div className="px-4 py-2.5 bg-[#FF6600] rounded-[4px] text-white font-semibold text-[12px] leading-[112.00000000000001%] ">
            SAVE 10%
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[12px] w-[554px] max-h-[210px]">
          <h2 className="text-[32px] leading-[130%] font-semibold text-[#12151A] ">Description:</h2>
          <p className="text-[16px] leading-[160%] w-full min-w-[452px] text-[#1D1F2C] font-poppins">
            A nasal clip is a small device typically used to pinch or secure the nostrils for various purposes, such as during sports, medical treatments, or personal health practices. It is usually made of flexible or padded materials to ensure comfort and a secure fit.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-2 gap-[16px] mt-4 max-w-[452px]">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img src="/public/sign.png" alt="sign" className="w-5 h-5" />
              <span className="text-[18px] font-medium text-[#242A33] leading-[#242A33] ">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="max-w-[554px] h-[55px] flex justify-center items-center gap-[8px] 
        py-[16px] bg-[#FF6600] hover:bg-orange-600 rounded-[100px] text-white font-semibold font-montserrat transition-all duration-300 text-[16px] my-6 ">
          <span className=' '>Add to Cart</span> 
          <img src="/Arrow To Right.png" alt="Arrow" className="w-6 h-6" />
        </button>

        {/* Payment Icons */}
        <div className="flex mb-6 max-w-[554px] items-center justify-center gap-[24px]">
          {paymentIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-[92px] h-[54px] bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${icon})` }}
            />
          ))}
        </div>

        {/* Extra Info */}
        <div className="w-full max-w-[554px]">
          {infoItemsA.map((item, idx) => (
            <div key={idx} className="border-b border-[#FFD8BC]">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center py-[10px] px-3 text-left"
              >
                <span className="text-[16px] leading-[160%] text-[#4A4C56] font-medium">
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-700 transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="pb-4 text-sm text-[#4A4C56] ">{item.content}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Page2;