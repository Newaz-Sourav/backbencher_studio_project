import React from "react";
import FAQItem from "./FAQItem";
import { ArrowRight } from "lucide-react";

const leftFAQs = [
  {
    question: "Who is Intake for?",
    answer:
      "Everyone. If you snore, have trouble sleeping, wake up with a dry mouth, or want to boost your workouts — try Intake. Trust us. Actually, we considered ourselves pretty good at breathing through our nose—until we tried Intake, and realized there was a whole world of air out there that we didn’t even know we were missing. But if you do have a history of allergies, sinus infections, a deviated septum, or anything that makes it difficult for you to breathe, Intake may help greatly.",
  },
  {
    question: "Will it help my snoring?",
    answer: "Yes! Many users have reported significant improvement.",
  },
  {
    question: "Why Nasal Breathing?",
    answer: "Nasal breathing has numerous health benefits like filtering and warming air.",
  },
];

const rightFAQs = [
  { question: "Why magnets?", answer: "Magnets help hold the Intake device in place." },
  { question: "How Intake helps", answer: "It opens your nasal airways to improve airflow." },
  { question: "How Long It Take To Work?", answer: "Many users notice improvements instantly." },
  { question: "How it works", answer: "It gently expands your nasal passages." },
  { question: "What about for workouts?", answer: "Boosts oxygen intake during exercise." },
  { question: "What's the cost difference?", answer: "Pricing depends on the plan selected." },
];

const FAQSection = () => {
  return (
    <section id="faqs" className="bg-[#fff] py-10">
      <h2 className="text-center text-[#070707] text-[48px] font-semibold mb-12 ">Common Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-10 gap-4">
        <div>
          {leftFAQs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
        <div>
          {rightFAQs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#6B2B00] text-white rounded-xl mt-10 py-20 px-[112px] flex flex-col justify-center items-center text-center">
        <h3 className="text-[32px] max-w-[538px] font-semibold text-[#FFFFFF] leading-[130%] mb-6 ">
          Choose your plan today and start breathing easier tomorrow!
        </h3>
        <button className="mt-6 flex gap-2 bg-[#FF6600] text-white text-[16px] leading-[160%] py-4 pl-[26px] pr-4 rounded-[100px] font-semibold hover:bg-orange-600 transition">
          <p>Order Now</p> 
          <ArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default FAQSection;