import React from "react";
import aboutImg from "../assets/Images/xmm-img1.png";
import tick from "../assets/Images/xmm-tick.png";
import arrow from "../assets/Images/arrow.png";

const About = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div id="about">
        <div className="relative">
          <div className="h-8"></div>
          <div className="absolute inset-x-0 -bottom-4 flex justify-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <button
                onClick={scrollToBottom}
                className="w-20 h-20 bg-black rounded-full flex items-center justify-center"
              >
                <div className="w-14 h-14 bg-customPurple rounded-full flex items-center justify-center">
                  <img
                    src={arrow}
                    alt="Scroll Down"
                    className="w-6 h-6 text-white"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="md:px-24 px-6 py-12 max-w-[1280px] mx-auto text-white">
          <div className="flex flex-col md:flex-row justify-between gap-12 mt-12 text-white">
            <div className="md:w-2/5 space-y-8">
              {/* image section */}
              <img src={aboutImg} alt="Banner" className="mx-auto w-5/6" />
            </div>
            <div className="md:w-3/5 space-y-8">
              {/* content section */}
              <p className="text-sm font-light rounded-full border-2 w-fit px-4">
                ABOUT US
              </p>
              <h1 className="lg:text-4xl text-2xl font-kanit font-medium text-white leading-tight">
                Best Ever Token Designed For Remarkable Success
              </h1>
              <p className="font-light">
                The main advantage of supporting $XMM is the project is focused
                on creating Volume and Market Making through. XMM empowers
                businesses to creative dynamic content target specific
              </p>
              <div className="flex gap-10">
                <span className="flex">
                  <img src={tick} alt="" />
                  <p>Market</p>
                </span>
                <span className="flex">
                  <img src={tick} alt="" />
                  <p>Volume</p>
                </span>
                <span className="flex">
                  <img src={tick} alt="" />
                  <p>Trend</p>
                </span>
              </div>
              <div>
                <button className="rounded-full px-8 py-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-white text-lg font-semibold hover:text-customPurple">
                  Read Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
