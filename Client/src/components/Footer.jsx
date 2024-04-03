import React from "react";
import { logo, facebook, linkedin, twitter, instagram } from "../assets";
const ProductList = [
  "About Us",
  "FAQ's",
  "Privacy Policy",
  "Terms of Service",
  "Disclaimer",
  "Submit Grievance",
  "Features",
];
const CommunityList = ["Subscription", "Courses", "Webinar"];

const Footer = () => {
  return (
    <div className="md:w-[1440px] w-[393px] md:h-[228px] h-[270px] md:py-[1rem] py-[2rem] border-t border-solid border-white border-opacity-10 flex flex-col items-center">
      <div className="flex flex-col md:gap-[0.5rem] gap-[1rem] md:justify-center md:items-center">
        <img src={logo} alt="" className="md:w-56 w-40" />
        <span className="md:w-[796px] w-[359px] md:h-[84px] h-[88px] font-normal md:text-[14px] text-[14px] md:leading-[28px] leading-[22px] md:text-center text-dimWhite">
        The Copartner Portal offers traders a seamless experience, providing easy access to essential tools, resources and community support, empowering them to navigate the markets with confidence and ease.
        </span>
        <div className="flex gap-7 rounded-full">
          <a href="">
            <img src={facebook} alt="Facebook" className="w-8" />
          </a>
          <a href="">
            <img src={linkedin} alt="LinkeDin" className="w-8" />
          </a>
          <a href="">
            <img src={twitter} alt="Twitter" className="w-8" />
          </a>
          <a href="">
            <img src={instagram} alt="Instagram" className="w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;