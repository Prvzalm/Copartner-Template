import React, { useEffect } from "react";
import { tick } from "../assets";
import { useLocation, useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { link } = location.state;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
      window.open(link, '_blank');
      window.location.reload();
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate, link]);

  return (
    <div className="popup-overlay">
      <div className="login-popup">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[340px] h-[285px] bg-[#06030E] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[3rem] justify-around">
            <div className="w-[293px] h-[60px] flex flex-col items-center text-center text-lightWhite p-6">
              <span className="w-[155px] h-[24px] font-[500] text-[20px] leading-[24px] mb-4">
                Verification
              </span>
              <span className="w-[293px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
                Enter the verification code we just send on your mobile number
              </span>
            </div>

            <div className="flex justify-center">
              <img src={tick} alt="Done" className="w-[87px] h-[87px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
