"use client";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  disabled,
  customStyles,
  customColor,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={btnType}
      className={`sm:p-4 mb-4 xl:py-6 lg:px-7 2xl:px-10 rounded-lg mx-2 w-[17vw] font-semibold text-lg xl:text-[1.35rem] ${
        disabled === false ? customColor : "bg-slate-500"
      } ${customStyles}`}
      onClick={handleClick}
    >
      <span className="text-white">{title}</span>
    </button>
  );
};

export default CustomButton;
