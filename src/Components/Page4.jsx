import React from 'react';

const Page4 = () => {
  return (
    <div className="w-full bg-amber-900 px-[7.5vw] py-[6vh] flex flex-col gap-20">
      {/* Section 1 – How it Works */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-5xl font-semibold leading-[62px]">How It Works</h2>
            <p className="text-white text-base font-medium leading-relaxed tracking-tight">
              Using our nasal clip is effortless and effective. Follow these steps to enjoy better airflow and relief from snoring or congestion.
            </p>
          </div>
          <img src="https://placehold.co/584x606" alt="Steps Illustration" className="rounded-2xl w-full" />
        </div>

        {/* Steps */}
        <div className="flex-1 flex flex-col gap-4 ">
          {[
            {
              title: 'Clean',
              step: 'Step 1',
              bg: 'bg-orange-500',
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
              bg: 'bg-white/10',
              text: (
                <>
                  Using the Applicator. Apply one adhesive Tab to each side of your nose just above the nostrils. Press each Tab onto your skin to ensure complete contact. Wait a few minutes before attaching the band.
                </>
              ),
            },
            {
              title: 'Tab placement',
              step: 'Step 3',
              bg: 'bg-white/10',
              text: (
                <>
                  There are some tips to use I-Will. <br />
                  Steel disc placed directly above the nostril (not on the nostril) <br />
                  Contoured indent fits around the nostril <br />
                  100% contact with skin on the nose, not the cheek. Always be sure to apply the Tabs properly. If the Tabs aren't placed well, the Band will not attach well.
                </>
              ),
            },
            {
              title: 'Attach',
              step: 'Step 4',
              bg: 'bg-white/10',
              text: (
                <>
                  Place the U-will band over your nose. The magnetic ends of the Band will snap onto the Tabs. <br />
                  <span className="font-semibold">Pro-tip:</span> Make sure the Band is not upside down. The magnets should be facing down.
                </>
              ),
            },
          ].map((item, index) => (
            <div key={index} className={`relative p-6 rounded-xl backdrop-blur-sm ${item.bg} text-white  `}>
              <div className="text-2xl font-semibold tracking-tight leading-loose mb-1">{item.title}</div>
              <div className="text-sm tracking-tight leading-tight">{item.text}</div>
              <div className="absolute top-0 right-0 bg-amber-700 px-3 py-1 rounded-tr-xl rounded-bl-xl text-xs font-medium">
                {item.step}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 – What’s in start kit */}
      <div className="flex flex-col-reverse lg:flex-row gap-12 justify-center items-start">
        {/* Left: Features */}
        <div className="flex-1 flex flex-col  gap-4 sm:mt-1 xl:mt-[220px] w-[100%] sm:w-[100%] md:mt-5 lg:mt-26">
          {[
            {
              title: '4 Bands',
              text: 'You can easily choose which works best for you.',
            },
            {
              title: '15 or 30 Tabs',
              text: "Tabs are made with 3M tape, they're safe for sensitive skin",
            },
            {
              title: 'Applicator',
              text: 'Use magnetic Applicator to pick up and attach Tab precisely.',
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl text-white md:h-[105px] xl:h-[145px] flex flex-col gap-2 xl:gap-4 ">
              <div className="text-2xl font-semibold tracking-tight leading-loose">{item.title}</div>
              <div className="text-sm font-normal tracking-tight leading-tight">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Right: Image + Title */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-white text-[40px] lg:text-[48px] font-semibold leading-[1.2] lg:leading-[62px] mt-[-45px]">What’s in start kit</div>
          <img src="https://placehold.co/584x413" alt="Starter Kit" className="rounded-2xl w-full h-100 lg:h-108 xl:h-[660px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Page4;
