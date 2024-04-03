import React, { useState, useEffect } from "react";
import { arrowLeft, arrowRight, testimonialUser } from "../assets";
import Footer from "./Footer";

const Testimonials = () => {
  const [count, setCount] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  const handdlePrevious = () => {
    if (count === 0) {
      setCount(testimonialsData.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  const handleNext = () => {
    if (count === testimonialsData.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [count]);

  useEffect(() => {
    setActiveDot(count);
  }, [count]);

  const testimonialsData = [
    {
      id: 1,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
      author: "Atthakrit Chimplapibul",
      image: testimonialUser,
      designation: "CEO, Company A",
    },
    {
      id: 2,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner.",
      author: "Atthakrit Chimplapibul",
      image: testimonialUser,
      designation: "CTO, Company B",
    },
    {
      id: 3,
      text: "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team3.",
      author: "Atthakrit Chimplapibul",
      image: testimonialUser,
      designation: "COO, Company C",
    },
  ];

  return (
    <>
    <div className="flex flex-col items-center justify-center sm:py-[4rem] py-6">
      <div className="flex flex-col justify-between items-center md:w-[557px] md:h-[103px] w-[330px] h-[110px] gap-[4px] md:mb-16 mb-2">
        <span
          className="font-[700] md:text-[50px] text-[30px] md:w-[385px] md:h-[103px] w-[224px] h-[70px]
          text-gradient-2 md:leading-[51px] leading-[35px] text-center"
        >
          What Our Users Say About Us
        </span>

        <span className="text-dimWhite md:w-[505px] w-[328px] text-center md:h-[56px] h-[34px] font-[400] md:text-[18px] text-[11px] md:eading-[28px] leading-[17px]">
          Empower your teams to build better processes, for a better workplace.
        </span>
      </div>

      <div className="flex justify-between md:gap-[6rem] gap-0 items-center">
        <button onClick={handdlePrevious}>
          <img
            src={arrowLeft}
            alt="LeftIcon"
            className="md:w-[58px] md:h-[58px] w-[34px] h-[34px]"
          />
        </button>

        <div className="flex-grow flex flex-col justify-center gap-[4rem] items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="md:w-[678px] md:h-[343px] w-[283px] h-[262px] font-[400] md:text-[26px] text-[14px] md:leading-[44px] leading-[23px] text-lightWhite text-center flex items-center">
              {testimonialsData[count].text}
            </span>

            <div className="flex flex-col md:w-[252px] w-[150px] md:h-[56px] h-[30px] justify-center items-center">
              <div className="flex flex-row gap-[10px]">
                <img
                  src={testimonialsData[count].image}
                  alt="OUR_USERS"
                  className="md:w-[40px] w-[27px] md:h-[40px] h-[27px]"
                />
                <div className="flex flex-col">
                  <span className="md:w-[202px] w-[117px] md:h-[25px] h-[13px] font-[700] md:text-[18px] text-[10px] md:leading-[23px] leading-[12px] text-lightWhite">
                    {testimonialsData[count].author}
                  </span>
                  <span className="md:w-[184px] w-[105px] md:h-[19px] h-[10px] font-[300] md:text-[14px] text-[8px] md:leading-[18.4px] leading-[10px] text-dimWhite">
                    {testimonialsData[count].designation}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-[6px] mt-[1rem]">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-[8px] h-[8px] rounded-[4px] ${
                    index === activeDot
                      ? "bg_three-dots_active"
                      : "bg_three-dots"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        <button onClick={handleNext}>
          <img
            src={arrowRight}
            alt="RightIcon"
            className="md:w-[58px] md:h-[58px] w-[34px] h-[34px]"
          />
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Testimonials;