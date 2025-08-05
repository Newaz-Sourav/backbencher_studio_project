import React, { useState } from 'react';

const Page2 = () => {
  const [selectedImage, setSelectedImage] = useState('/head1.png');

  const images = [
    '/head1.png',
    '/head3.png',
    '/head4.png',
    '/head5.png'
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
    'original.svg',
    'g-pay.png',
    'master.svg',
    'shop.png',
    'visa.svg'
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row  gap-12 sm:gap-20">
      
      {/* Left: Image Gallery */}
      <div className="flex flex-col w-full sm:w-[560px]">
        
        {/* Main Image Preview */}
        <div className="relative w-full aspect-[1/1.08] rounded-3xl border border-[#FFD0B0] bg-[#FFF0E6] overflow-hidden">
          <img
            src={selectedImage}
            alt="Selected preview"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Thumbnails */}
        <div className="flex flex-row gap-4 mt-6 overflow-x-auto sm:overflow-visible scroll-smooth snap-x">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`snap-start w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 relative cursor-pointer rounded-lg overflow-hidden transition duration-200 ${
                selectedImage === img ? 'ring-4 ring-orange-400' : ''
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Details Section */}
      <div className="flex flex-col flex-grow gap-6">
        
        {/* Ratings + Title */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-[url('/star.png')] bg-cover bg-no-repeat" />
              ))}
            </div>
            <div className="text-lg font-semibold text-black">4.5</div>
            <div className="text-base text-neutral-800">(500+ Reviews)</div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold font-montserrat text-neutral-900 leading-snug">
            Noseclip
          </h1>
        </div>

        {/* Price */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-4xl sm:text-5xl font-semibold font-montserrat text-amber-900">
            $12.00
          </span>
          <span className="text-xl sm:text-2xl font-medium text-neutral-900 line-through">
            $20.00
          </span>
          <div className="px-4 py-2.5 bg-orange-500 rounded text-white font-semibold text-xs">
            SAVE 10%
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">Description:</h2>
          <p className="text-base sm:text-lg text-neutral-800 leading-relaxed tracking-tight font-poppins">
            A nasal clip is a small device typically used to pinch or secure the nostrils for various purposes, such as during sports, medical treatments, or personal health practices. It is usually made of flexible or padded materials to ensure comfort and a secure fit.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <img src="/public/sign.png" alt="sign" className="w-5 h-5" />
              <span className="text-base sm:text-lg font-medium text-gray-800">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="mt-4 self-start flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-600 rounded-full text-white font-semibold font-montserrat transition-all duration-300">
          Add to Cart
          <img src="/public/Arrow To Right.png" alt="Arrow" className="w-6 h-6" />
        </button>

        {/* Payment Icons */}
        <div className="flex flex-wrap gap-6 mt-6">
          {paymentIcons.map((icon, idx) => (
            <div
              key={idx}
              className="w-20 sm:w-24 h-14 bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/public/${icon}')` }}
            />
          ))}
        </div>

        {/* Extra Info */}
        <div className="mt-6 border-t border-orange-200 pt-4 flex flex-col gap-2">
          {infoItems.map((info, idx) => (
            <div key={idx} className="flex justify-between items-center border-b border-orange-200 py-2 px-3">
              <span className="text-base text-neutral-600 font-medium">{info}</span>
              <div className="w-5 h-5 bg-neutral-600 flex items-center justify-center text-white text-sm rounded-full">+</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;