import React, { useState } from "react";
import { Check } from "lucide-react";
import { Star } from "lucide-react";

const plans = [
  {
    title: "1-month supply",
    tabs: "30 Sticky Tabs",
    price: "$29.99",
    discount: "5% discount",
  },
  {
    title: "3-month supply",
    tabs: "90 Sticky Tabs",
    price: "$79.99",
    discount: "10% discount",
  },
  {
    title: "6-month supply",
    tabs: "180 Sticky Tabs",
    price: "$149.99",
    discount: "20% discount",
  },
  {
    title: "1-Year supply",
    tabs: "365 Sticky Tabs",
    price: "$240.99",
    discount: "30% discount",
  },
];

export default function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <div id="shop-bundles" className="pt-10 pb-20 text-center">
      <h2 className="text-[48px] font-semibold leading-[130%] text-[#FF6600] mb-14 ">
        Choose the Best Plan for You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {plans.map((plan, idx) => {
          const isSelected = selectedPlan === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedPlan(idx)}
              className={`cursor-pointer max-w-[350px] border rounded-xl flex flex-col justify-between shadow-md transform transition-all duration-300 
                ${
                  isSelected
                    ? "scale-106 border-[#FF6600]"
                    : "scale-100 border-[#DADDE3]"
                }`}
            >
              <div>
                <div className={`py-5 mb-14 rounded-t-xl ${!isSelected ? "bg-orange-50" : "bg-[#FF6600] " } `}>
                  <h3 className={`text-[22px] font-semibold mb-1 ${isSelected ? "text-white " : " " } `}>{plan.title}</h3>
                  <p className={`text-sm text-gray-600 ${isSelected ? "text-white " : " " } `}>{plan.tabs}</p>
                </div>

                <div className=" flex flex-col justify-center items-center  " >
                  <p className="text-4xl font-bold mb-2 ">{plan.price}</p>
                  <div className={` border-t w-[75%] my-5 ${isSelected ? "border-[#FF6600] " : " border-[#DADDE3] " }  `} ></div>
                  <p className="text-[#FF6600] font-medium mb-5">
                    ({plan.discount})
                  </p>
                  <button
                    className={` w-[85%] py-5 mt-8 text-[20px] rounded-md font-bold mb-6 transition-colors duration-300
                    ${
                      isSelected
                        ? "bg-orange-500 text-white"
                        : "border border-orange-500 text-orange-500"
                    }`}
                  >
                    {isSelected ? "Buy Now" : "Buy Now"}
                  </button>
                </div>

                <ul className="text-left text-sm space-y-3 px-6">
                  {[
                    "60 days Money back guarantee",
                    "Whole Starter kit",
                    "Free Returns",
                    "Free shipping with every bundle after 3 month supply",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-[#DCFAE6] p-1.5 rounded-full flex justify-center items-center">
                        <Check className="text-green-500 " size={16} />
                      </div>
                      <p className="text-[#4A4C56] text-[16px] font-[400] leading-[140%]">
                        {feature}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 mb-10 flex gap-3 justify-center items-center text-yellow-500 ">
                <Star size={18} className="text-[#FAAF3E] " fill="currentColor" />
                <Star size={18} className="text-[#FAAF3E] " fill="currentColor" />
                <Star size={18} className="text-[#FAAF3E] " fill="currentColor" />
                <Star size={18} className="text-[#FAAF3E] " fill="currentColor" />
                <Star size={18} className="text-[#FAAF3E] " fill="currentColor" />
                <p className="text-gray-600 text-sm font-semibold ">
                  <span className=" font-bold " >5</span> (500+ Reviews)
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}