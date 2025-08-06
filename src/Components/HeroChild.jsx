import React from "react";

const HeroChild = () => {
  return (
    <section
    id="home"
      className="
        absolute 
        left-4 top-20
        sm:left-8 sm:top-24 
        md:left-16 md:top-28 
        lg:left-[112px] lg:top-[208px] 
        w-[90%] max-w-[592px] 
        h-[280px] sm:h-[340px] md:h-[380px] lg:h-[420px] xl:h-[460px] 
        flex flex-col items-start gap-6 
        z-10
      "
    >
      {/* Avatar & Title with Description */}
      <div className="flex flex-col items-start gap-0 w-full h-auto">
        {/* Avatar & Badge */}
        <div className="flex items-center w-full relative h-[42px]">
          {["femaleAvatar.png", "Avatar1.png", "Avatar.png"].map((avatar, idx) => (
            <div key={idx} className={`relative ${idx !== 0 ? "-ml-2.5" : ""}`}>
              <div
                className="w-[42px] h-[42px] rounded-full border-2 border-white bg-cover bg-center"
                style={{ backgroundImage: `url('/${avatar}')` }}
              />
            </div>
          ))}

          {/* Badge */}
          <div className="ml-[-8px] z-10 px-4 py-[10px] bg-[#F5F7F9] rounded-full flex items-center gap-1 not-first-of-type:">
            <span className="font-montserrat font-semibold text-xs text-[#242A33]">
              26k Happy Customers
            </span>
          </div>
        </div>

        {/* Title */}
        <h1
          className="
            font-montserrat font-semibold
            text-2xl sm:text-4xl md:text-5xl lg:text-[64px]
            leading-tight lg:leading-[120%]
            text-white mb-4 w-full
          "
        >
          Breathe better, live better!
        </h1>

        {/* Description */}
        <p
          className="
            font-montserrat font-medium 
            text-sm sm:text-base md:text-lg 
            leading-relaxed text-white 
            max-w-[90%] sm:max-w-[474px]
          "
        >
          Discover how effortless breathing can enhance your life. Take the first step Today!
        </p>

        {/* CTA Button */}
        <button
          className="
            flex items-center justify-center gap-2
            pl-[26px] pr-4 py-4 
            bg-[#FF6600] hover:bg-orange-600 
            rounded-[100px] 
            font-montserrat font-semibold 
            text-sm sm:text-[16px] 
            text-white tracking-wide
            transition-all duration-300 mt-[42px]
          "
        >
          <span>Shop Now</span>
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroChild;