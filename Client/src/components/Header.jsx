import React from "react";
import { logo, bckGroundImg } from "../assets";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row pt-4">
      <div className="md:w-[0%] w-[100%] flex">
        <img
          src={logo}
          alt="Logo"
          className="md:w-[150px] w-[121px] md:h-[39px] h-[33px]"
        />
      </div>
      <div className="relative flex flex-col py-[2rem] md:w-[50%]">
        <span className="z-10 relative w-[354px] h-[96px] font-[700] text-[22px] leading-[32px] text-gradient">
          Connect with our SEBI-registered research analysts for expert guidance
        </span>
        <span className="z-10 relative text-dimWhite font-[500] text-[12px] leading-[16px]">
          Invest, Learn and Earn
        </span>
        <div className="md:w-[50%] md:hidden block absolute inset-0">
          <img
            src={bckGroundImg}
            alt="Background"
            className="w-[80%] object-cover mt-[-4rem] ml-[8rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
