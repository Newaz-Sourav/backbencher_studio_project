import React from 'react';
import kit from "../assets/kit.png"

const Page4 = () => {
  return (
    <div id="how-it-works" className="w-full h-auto bg-amber-900 flex flex-col gap-0 ">
      
      {/* Section 1 – How it Works */}
      <div className="flex flex-col lg:flex-row py-20 gap-[48px] justify-center w-full ">
        {/* Left – Heading + Image */}
        <div className="flex flex-col gap-[16px] flex-1 max-w-[584px] text-white">
          <h2 className="text-[48px] font-semibold leading-[130%]">How It Works</h2>
          <p className="text-[16px] font-medium leading-[160%]">
            Using our nasal clip is effortless and effective. Follow these steps to enjoy better airflow and relief from snoring or congestion.
          </p>
          <div className="min-w-[584px] min-h-[606px] ">
            <img
              src="/boy.png"
              alt="Steps Illustration"
              className="w-full h-full object-cover rounded-[16px] "
            />
          </div>
        </div>

        {/* Right – Steps */}
        <div className="flex flex-col flex-1 max-w-[584px] gap-[16px] text-white ">
          {[
            {
              title: 'Clean',
              step: 'Step 1',
              bg: 'bg-[#FF6600]',
              text: (
                <>
                  Clean your nose thoroughly to remove any dirt or oil from the skin. Let your nose dry completely before applying the Tabs. <br />
                  <span className="font-semibold">Pro-Tip:</span> Cleanse with soap and water or use an alcohol prep pad for best results.
                </>
              ),
            },
            {
              title: 'Apply',
              step: 'Step 2',
              bg: 'bg-[#FFFFFF1A] ',
              text: (
                <>
                  Using the Applicator. apply one adhesive Tab
                  to each side Of your nose. just above the
                  nostrils. Press each Tab onto your skin to ensure complete contact. Wait a few minutes before attaching the band.
                </>
              ),
            },
            {
              title: 'Tab placement',
              step: 'Step 3',
              bg: 'bg-[#FFFFFF1A] ',
              text: (
                <>
                  Steel disc placed directly above the nostril (not on the nostril). Contoured indent fits around the nostril. Ensure 100% contact with skin on the nose—not the cheek.
                </>
              ),
            },
            {
              title: 'Attach',
              step: 'Step 4',
              bg: 'bg-[#FFFFFF1A] ',
              text: (
                <>
                  Place the U-will band over your nose. The magnetic ends of the Band will snap onto the Tabs. <br />
                  <span className="font-semibold">Pro-tip:</span> Make sure the Band is not upside down.
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative p-[24px] rounded-[12px] backdrop-blur-sm ${item.bg}`}
            >
              <div className="text-[24px] mb-4 leading-[130%] text-[#FFFFFF] font-semibold">{item.title}</div>
              <div className="text-[14px] font-[400] leading-[140%] ">{item.text}</div>
              <div className={`absolute ${index==0 ? "bg-[#B54800] " : "bg-[#FF6600] "} top-0 right-0 px-3 py-1 rounded-tr-xl rounded-bl-xl text-[12px] font-medium`}>
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 – What's in Start Kit */}
      <div className="flex flex-col-reverse py-12 lg:flex-row gap-[48px] justify-center items-stretch  ">
        
        {/* Left – Features Content aligned with image bottom */}
        <div className="flex-1  flex flex-col justify-end max-w-[584px] gap-[16px] text-white ">
          {[
            {
              title: '4 Bands',
              text: 'You can easily choose which works best for you.',
            },
            {
              title: '15 or 30 Tabs',
              text: "Tabs are made with 3M tape, they're safe for sensitive skin.",
            },
            {
              title: 'Applicator',
              text: 'Use magnetic Applicator to pick up and attach Tab precisely.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-[24px] bg-white/10 backdrop-blur-sm rounded-[12px] flex flex-col gap-[16px]"
            >
              <div className="text-[24px] font-semibold leading-[130%] text-white">{item.title}</div>
              <div className="text-[14px] font-[400] leading-[140%] text-white">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Right – Title + Responsive Image */}
       <div className="flex flex-col items-start ">
          <h2 className="text-white text-[40px] md:text-[48px] font-semibold leading-[130%]">
            What’s in Start Kit
          </h2>
          <p className="text-white text-[16px] mt-2 font-medium leading-[160%]">
            Everything you need to get started on better breathing.
          </p>
          <div className='min-w-[584px] h-[413px] mt-8 ' >
            <img
              src={kit}
              alt="Starter Kit"
              className="min-w-[584px] h-[413px] object-cover rounded-[16px]"
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Page4;