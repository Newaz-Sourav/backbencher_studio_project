import React from 'react';


const Backed_by_Sc = () => {
  return (
    <div id="science" className="w-full bg-[#6B2B00] py-[80px] px-6 lg:px-[112px]">
      <div className="flex flex-col lg:flex-row w-full max-w-[1216px] mx-auto gap-[48px]">

        {/* Left Content */}
        <div className="flex flex-col justify-center flex-1 gap-6 ">
          {/* Header + Paragraph */}
          <div className="flex flex-col gap-[14px]">
            <h2 className="text-white text-[32px] lg:text-[48px] font-semibold leading-[130%]">
              Backed by Science
            </h2>
            <p className="text-white text-[16px] max-w-[482px] font-medium leading-[160%]">
              Our product is backed by clinical studies that show significant improvement in airflow and reduction in snoring for consistent users.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="flex flex-col gap-4 ">
            {[
              "Clinical study shows 80% improvement in nasal airflow",
              "70% of users report reduced snoring after 2 weeks",
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2 ">
                <img
                  src="public/sign.png"
                  alt="check icon"
                  className="w-[18px] h-[18px] "
                />
                <p className="text-white text-[16px] font-semibold leading-[160%]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="public/ligh.png"
            alt="Scientific imagery"
            className="w-[686px] h-[500px] object-contain ml-[17.8867px] mr-[28.9974px] mb-[54.2792px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Backed_by_Sc;