import React from 'react';

const Page3 = () => {
  return (
    <div id="features" className="w-full bg-[#6B2B00] py-[80px] px-[112] flex flex-col justify-center items-center gap-12 ">

      {/* Section 1: Pain Points */}
      <div className="flex flex-col  lg:flex-row justify-center items-center gap-12 ">
        {/* Image */}
        <div className=" min-w-[584px] h-[478px] ">
          <img
            src="public/sleep1.png"
            alt="Pain point image"
            className="min-w-[584px] h-[478px] object-cover rounded-[26px] "
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-0">
          <h2 className="text-white text-[48px] font-semibold leading-[130%] font-montserrat">
            Pain Points
          </h2>
          <h3 className="text-white text-[24px] my-[14px] leading-[130%] font-semibold font-montserrat tracking-tight">
            Struggling with Snoring or Congestion?
          </h3>
          <p className="text-white text-[18px] font-medium leading-[160%] font-montserrat tracking-tight max-w-[584px] ">
            Whether it's snoring, allergies, or breathing difficulties during exercise, our nasal clip is here to help. These issues can disrupt your sleep, lower your energy, and impact your quality of life.
          </p>

          {/* Pain List */}
          <ul className="flex flex-col gap-4 mt-6 ">
            {[
              'Persistent snoring',
              'Nasal congestion',
              'Allergies affecting breathing',
              'Struggling to breathe during workouts'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-[6px] ">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                <span className="text-white text-[16px] font-semibold leading-[160%] font-montserrat">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Solution Overview */}
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12">
        {/* Image */}
        <div className=" min-w-[584px] h-[478px]">
          <img
            src="public/image.png"
            alt="Solution image"
            className="min-w-[584px] h-[478px] object-cover rounded-[26px]"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-0">
          <h2 className="text-white text-[48px] font-semibold leading-[130%] font-montserrat">
            Solution Overview
          </h2>
          <h3 className="text-white text-[24px] my-[14px] leading-[130%] font-semibold font-montserrat tracking-tight">
            Struggling with Snoring or Congestion?
          </h3>
          <p className="text-white text-[18px] font-medium leading-[160%] font-montserrat tracking-tight max-w-[584px] ">
            Discover how our innovative solution addresses these issues effectively and comfortably.
          </p>

          {/* Solution List */}
          <ul className="flex flex-col gap-4 mt-6 ">
            {[
              'Enhance airflow',
              'Reduce snoring',
              'Clear nasal passages',
              'Made from soft materials'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-[6px] ">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0" />
                <span className="text-white text-[16px] font-semibold leading-[160%] font-montserrat">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Page3;