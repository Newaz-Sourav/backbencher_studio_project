import { ArrowRight } from "lucide-react";
import dicord from "../assets/discord.png";
import tw from "../assets/tw.png";
import ins from "../assets/ins.png";
import ln from "../assets/ln.png";


export default function Footer() {
  return (
    <footer id="contact-us" className="bg-[#6A2B00] text-white pt-15 pb-5 px-[112px] text-center">
      <h2 className="text-[48px] leading-[130%] font-semibold mb-[10px] ">Get in Touch</h2>
      <p className="max-w-[640px] mx-auto mb-10 font-medium leading-[160%] text-[16px] ">
        Our mission is to drive progress and enhance the lives of our customers by
        delivering superior products and services that exceed expectations.
      </p>
      <div className=" flex items-center mb-5 justify-center mx-auto hover:scale-105 transition">
        <button className=" flex gap-2 bg-[#FF6600] text-white text-[16px] leading-[160%] py-4 pl-[26px] pr-4 rounded-[100px] font-semibold hover:bg-orange-600 transition">
            <p>Order Now</p> 
            <ArrowRight size={24} />
        </button>
      </div>

      <p className="my-[14px] font-medium leading-[160%] text-[16px] ">
        ©Copyright Nasal clip.com. All rights reserved. 2024
      </p>

      <hr className="border-[#FFFFFF] mb-6  mx-auto" />

    <div className="flex items-center flex-wrap justify-between leading-[160%] font-medium text-[16px] ">
        <div className="flex gap-10 " >
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
        </div>
        <div className="flex gap-10 ">
        <a href="#">Home</a>
        <a href="#">Resources</a>
        <a href="#">FAQ</a>
        </div>
        <div className="flex items-center gap-[10px] ">
        <img src={dicord} className="text-white cursor-pointer w-11 h-11" />
        <img src={tw} className="text-white cursor-pointer w-11 h-11" />
        <img src={ins} className="text-white cursor-pointer w-11 h-11" />
        <img src={ln} className="text-white cursor-pointer w-11 h-11" />
        </div>
    </div>

    </footer>
  );
}