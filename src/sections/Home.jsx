import React from "react";
import bannerImg from "../assets/Images/xmm-hero.png";
import user1 from "../assets/Images/user1.jpg";
import user2 from "../assets/Images/user2.jpg";
import user3 from "../assets/Images/user3.jpg";

const Home = () => {
  return (
    <>
      <div id="home" className="bg-customPurple">
        <div className="md:px-24 px-6 py-12 max-w-[1280px] mx-auto ">
          {/* Header Section */}
          <div>
            <h1 className="lg:text-9xl text-5xl font-oswald font-black text-white leading-tight">
              MARKETING MAKING <br />
              WITH XMM
            </h1>
          </div>
          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 mt-12 text-white">
            {/* Banner Content */}
            <div className="md:w-3/5 space-y-8">
              <p className="text-lg leading-relaxed">
                XMM empowers businesses to create dynamic content, <br />
                target specific demographics, and optimize their digital
                presence.
              </p>
              <div className="flex flex-col md:flex-row gap-7">
                <button className="rounded-full px-8 py-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-white text-lg font-semibold hover:text-customPurple ">
                  Join Telegram
                </button>
                <div className="flex items-center space-x-[-10px]">
                  <img
                    src={user1}
                    alt="User 1"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src={user2}
                    alt="User 2"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src={user3}
                    alt="User 3"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="text-xl font-semibold">OUR HAPPY CUSTOMERS</h6>
                <p className="text-lg leading-relaxed font-light">
                  Our happy customers are at the heart <br /> of everything we
                  do.
                </p>
              </div>
            </div>
            {/* Banner Image */}
            <div className="md:w-2/5 lg:relative">
              <img
                src={bannerImg}
                alt="Banner"
                className="lg:absolute lg:top-[-40%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Container */}
    </>
  );
};

export default Home;
