import React from "react";
import beforeImg from "../assets/before.png"; // Replace with actual before image path
import afterImg from "../assets/after.png"; // Replace with actual after image path
import { Check, X } from "lucide-react";

const features = {
  left: [
    { title: "Flimsy", desc: "Nasal strips have very little structure. When you inhale, they can still collapse." },
    { title: "Unsupportive", desc: "Nasal strips don’t hold your nose open as wide as Intake." },
    { title: "Falls off", desc: "Don’t wake up with your nasal strip stuck to your pillow again." },
    { title: "Hurts your skin", desc: "Nasal strips stick to the bridge of your nose using an aggressive adhesive. When you pull it off, your skin goes with it." },
    { title: "Pulls forward", desc: "Nasal strips rely on the leverage of your nose bridge to widen the nasal passage." },
  ],
  right: [
    { title: "Actually opens your nose", desc: "Intake doesn’t flex, so your nose opens to the size Band you wear. We can open your nose up to 100% more." },
    { title: "Durable", desc: "Intake is built strong and durable so your nose stays open right where you want it, as long as you want it." },
    { title: "Stays on all day/night", desc: "Intake will be precisely where you left it when you awaken, keeping your nasal passages open for uninterrupted breathing." },
    { title: "Skin safe", desc: "Intake uses a strong magnetic Band to hold your nose open, not the bridge of your nose. We use less adhesive and we care that your skin stays where it belongs—on your nose." },
    { title: "Pulls outward", desc: "Intake pulls out on your nose. Using the suction cup-like Tabs, the Band." },
  ],
};

const RealResults = () => {
  return (
    <section id="before-after" className="  py-20 text-center">
      <div className="w-full flex flex-col justify-center items-center  gap-3 " >
        <h2 className="text-[36px] w-[490px] md:text-[48px] font-semibold leading-[130%] text-[#070707] ">
            Real Results You Can Feel
        </h2>
        <p className="text-[#070707] w-[356px] text-[16px] font-medium leading-[160%] mb-12">
            See the difference our nasal clip can make
            for snoring and airflow.
        </p>
      </div>

      {/* Image comparison */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12 justify-center items-center ">
        <div className="relative">
          <img src={beforeImg} alt="Before" className="rounded-[16px] w-[592px] h-[494px] " />
        </div>
        <div className="relative">
          <img src={afterImg} alt="After" className="rounded-[16px] w-[592px] h-[494px] " />
        </div>
      </div>

      {/* Features list */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
        {/* Left Column */}
        <div className="space-y-6  ">
          {features.left.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start ">
              <div className="flex mb-4 items-center justify-center gap-[10px]" >
                <div className="bg-[#4A4C56] p-2 rounded-[100px] flex justify-center items-center " >
                    <X className="text-[#FFFFFF] " size={20} /> 
                </div>
                <h3 className="font-semibold text-[24px] leading-[130%] text-[#4A4C56]">{item.title}</h3>
              </div>
              <p className="text-[#4A4C56] text-[16px] font-[400] leading-[160%]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6 ">
          {features.right.map((item, idx) => (
            <div key={idx} className="flex flex-col items-start ">
              <div className="flex mb-4 items-center justify-center gap-[10px]" >
                <div className="bg-[#FF6600] p-2 rounded-[100px] flex justify-center items-center " >
                    <Check className="text-[#FFFFFF] " size={20} /> 
                </div>
                <h3 className="font-semibold text-[24px] leading-[130%] text-[#070707]">{item.title}</h3>
              </div>
              <p className="text-[#070707] text-[16px] font-[400] leading-[160%]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealResults;