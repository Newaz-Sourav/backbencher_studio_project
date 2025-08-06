import React from "react";
import { Play } from "lucide-react";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";

const videos = [v1, v2, v3];

const VideoCards = () => {
  return (
    <section className="bg-[#6B2B00] border py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-[19.0124px] px-4">
        {videos.map((src, index) => {
          const isMiddle = index === 1;
          const width = isMiddle ? "w-[602px]" : "w-[287.5622px]";
          const height = isMiddle ? "h-[630px]" : "h-[630.5772px]";

          return (
            <div
              key={index}
              className={`relative rounded-[31.6873px] overflow-hidden shadow-lg ${width} ${height} group`}
            >
              <img
                src={src}
                alt={`Video thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors duration-300">
                <button className="bg-gray-200 flex justify-center items-center w-[85.5557px] h-[85.5557px] rounded-full">
                  <Play className="w-14 h-14 text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VideoCards;