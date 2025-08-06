import React, { useState } from "react";
import minus from "../assets/btn.png"
import plus from "../assets/btnPlus.png"

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#DADDE3] rounded-[12px] mb-3 py-4 pl-6 pr-5 bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-[24px] leading-[130%] font-medium text-[#000E18] ">{question}</h3>
        {isOpen ? <div>
            <img src={minus} className="h-10 w-10 " alt="" />
        </div> : <img src={plus} className="h-10 w-10 " alt="" /> }
      </div>
      {isOpen && (
        <div>
            <div className="border-t border-[#DADDE3] border-dashed mt-3 " ></div>
            <p className="text-[16px] mt-2 text-[#404C5C] leading-[160%] mr-[40px] ">
            {answer}
            </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;