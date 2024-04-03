import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { close } from "../assets";

const OTP = () => {
  const [otp, setOTP] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const { phoneNumber, link } = location.state;
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, phoneNumber }),
      });

      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        navigate("/success", { state: { link } });
      } else {
        setError("Failed to verify OTP");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleClose = () => {
    navigate('/');
  }

  return (
    <div className="popup-overlay">
      <div className="login-popup">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[340px] h-[300px] bg-[#06030E] border border-[#18181B] rounded-[10px] px-6 flex flex-col gap-[2rem] justify-around">
            <div className="w-[293px] h-[60px] flex flex-col items-center text-center text-lightWhite mx-auto">
              <button onClick={handleClose} className="ms-auto">
                <img className="w-6 h-6" src={close} alt="close" />
              </button>
              <span className="w-[155px] h-[24px] font-[500] text-[20px] leading-[24px] mb-4">
                OTP Verification
              </span>
              <span className="w-[293px] h-[34px] font-[400] text-[14.4px] leading-[17px]">
                Enter the verification code we just send on your mobile number
              </span>
            </div>

            <div className="w-[290px] flex flex-col justify-between">
              <div className="w-[290px] h-[50px]">
                <input
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  type="text"
                  placeholder="Enter your OTP"
                  className="bg-[#06030E] rounded-[10px] border border-[#18181B] w-full h-full text-white font-[400] text-[14px] p-2"
                />
              </div>
              <div className="text-red-500 mx-auto py-4">
                {error}
              </div>
              <button
                onClick={handleSubmit}
                className="w-[290px] h-[50px] bg-white font-[500] text-[16px] leading-[20px] text-center rounded-[10px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
