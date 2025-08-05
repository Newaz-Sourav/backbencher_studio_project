import React from 'react';

const Page3 = () => {
  return (
    <div className="w-full bg-amber-900 py-16 px-4 sm:px-10 lg:px-28 flex flex-col gap-16">

      {/* Section 1: Pain Points */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src="public/sleep1.png"
          alt="Pain point image"
          className="w-full lg:w-[50%] h-auto rounded-3xl object-cover "
        />

        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-snug font-montserrat">
            Pain Points
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-semibold font-montserrat tracking-tight">
            Struggling with Snoring or Congestion?
          </h3>
          <p className="text-white text-base font-medium leading-relaxed font-montserrat tracking-tight">
            Whether it's snoring, allergies, or breathing difficulties during exercise, our nasal clip is here to help. These issues can disrupt your sleep, lower your energy, and impact your quality of life.
          </p>

          {/* Pain List */}
          <ul className="flex flex-col gap-3 mt-4">
            {[
              'Persistent snoring',
              'Nasal congestion',
              'Allergies affecting breathing',
              'Struggling to breathe during workouts'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-white text-base font-semibold leading-relaxed font-montserrat">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Section 2: Solution Overview */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
        <img
          src="public/image.png"
          alt="Solution image"
          className="w-full lg:w-[50%] h-auto rounded-3xl object-cover"
        />

        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-snug font-montserrat">
            Solution Overview
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-semibold font-montserrat tracking-tight">
            Struggling with Snoring or Congestion?
          </h3>
          <p className="text-white text-base font-medium leading-relaxed font-montserrat tracking-tight">
            Discover how our innovative solution addresses these issues effectively and comfortably.
          </p>

          {/* Solution List */}
          <ul className="flex flex-col gap-3 mt-4">
            {[
              'Enhance airflow',
              'Reduce snoring',
              'Clear nasal passages',
              'Made from soft materials'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-md"></div>
                <span className="text-white text-base font-semibold leading-relaxed font-montserrat">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page3;