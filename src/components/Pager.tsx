import React from "react";
import done_icon from "../assets/icons/done_icon.svg";

type PagerProps = {
  step: number;
};

const Pager = ({ step }: PagerProps) => {
  return (
    <div className="w-full h-16 font-openSans text-base">
      <div className="flex items-center gap-[83px] relative">
        <div className="flex flex-col gap-1 items-center">
          <div className="flex justify-center items-center w-[40px] h-[40px] rounded-lg bg-[#E9FAF1] text-xl">
            {step === 0 ? (
              <span className="font-bold">1</span>
            ) : (
              <img src={done_icon} style={{ width: "22px", height: "22px" }} />
            )}
          </div>
          <p>Personal information</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div
            className={`flex justify-center items-center w-[40px] h-[40px] rounded-lg border text-xl ${
              step === 0
                ? "bg-[#F5F5F5] text-[#95939A]"
                : "bg-white text-[#212529]"
            }`}
          >
            <span className="font-bold">2</span>
          </div>
          <p>Chess experience</p>
        </div>
        <div className="absolute top-5 left-[105px] w-[174px] h-[1px] bg-[#B9B4C34D]"></div>
      </div>
    </div>
  );
};

export default Pager;
