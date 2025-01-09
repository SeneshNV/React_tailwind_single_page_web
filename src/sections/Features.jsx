import React from "react";
import xmmIcon1 from "../assets/Images/xmm-icon1.png";
import xmmIcon2 from "../assets/Images/xmm-icon2.png";
import xmmIcon3 from "../assets/Images/xmm-icon3.png";

const Features = () => {
  return (
    <>
      <div id="features" className="">
        <div className="md:px-24 px-6 py-12 max-w-[1280px] mx-auto text-white">
          <div>
            <p className="text-sm font-light rounded-full border-2 w-fit px-4">
              FEATURES
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-12 mt-5 text-white">
            <div className="md:w-2/6 space-y-8">
              {/* content section */}

              <h1 className="lg:text-4xl text-2xl font-kanit font-medium text-white leading-tight">
                Features Of X MARKET MAKER
              </h1>
              <div className="items-end flex">
                <p className="font-light">
                  The main advantage of supporting $XMM is the project is
                  focused on creating Volume and Market Making through. XMM
                  empowers businesses to create dynamic content and target
                  specific audiences.
                </p>
              </div>
            </div>
            <div className="md:w-4/6 space-y-8">
              <div className="overflow-x-auto">
                <table className="w-full border-separate border-spacing-0 border-b border-gray-200">
                  <tbody>
                    <tr className="grid grid-cols-3">
                      <td className="border-r border-gray-200 align-top px-4 py-2 sm:px-2">
                        01
                        <br />
                        Benefits For Holders
                      </td>
                      <td className="border-r border-gray-200 align-top px-4 py-2 bg-gradient-to-b from-indigo-900 to-transparent sm:px-2">
                        02
                        <br />
                        Biggest Community
                      </td>
                      <td className="align-top px-4 py-2 bg-gradient-to-t sm:px-2">
                        03
                        <br />
                        Ecosystem - Redefined
                      </td>
                    </tr>
                    <tr className="h-48 grid grid-cols-3">
                      <td className="border-r border-gray-200 flex items-end px-4 py-2">
                        <img src={xmmIcon1} alt="" />
                      </td>
                      <td className="border-r border-gray-200 flex items-end px-4 py-2">
                        <img src={xmmIcon2} alt="" />
                      </td>
                      <td className="flex items-end px-4 py-2">
                        <img src={xmmIcon3} alt="" />
                      </td>
                    </tr>

                    <tr className="grid grid-cols-3">
                      <td className="border-r border-gray-200 flex items-end px-4 py-2 bg-gradient-to-t from-indigo-900 to-transparent sm:px-2">
                        We aim to increase the value of our currency to benefit
                        our community. Market Making will be key focus. We aim
                        to increase the value of our currency to benefit our
                        community.
                      </td>
                      <td className="border-r border-gray-200 flex items-end px-4 py-2 sm:px-2">
                        XMM is the First ever Crypto with the market making
                        objective that's being worked upon at such amazing
                        level! We will focus on community building a lot for
                        that.
                      </td>
                      <td className="flex items-end px-4 py-2 bg-gradient-to-t from-indigo-900 to-transparent sm:px-2">
                        Our powerful token will protect our holders from the
                        turbulence of the crypto market and help them hold
                        despite the uncertainty of the market.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
