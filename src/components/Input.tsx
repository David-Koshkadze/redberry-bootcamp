import React, { useState } from "react";
import green_allow_icon from "../assets/icons/green_allow_icon.svg";

type InputProps = {
  type: string;
  placeholder: string;
  required?: boolean;
};

const Input = ({ type, placeholder, required }: InputProps) => {
  const [value, setValue] = useState("");
  const [isText, setIsText] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validateInput = (val: string) => {
    setIsValid(false);
    if (val.length > 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (event.target.value.length > 0) {
      setIsText(true);
    } else {
      setIsText(false);
    }

    validateInput(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type={type}
        required={required}
        value={value}
        className="w-full px-4 py-2 text-black outline-none border-b-[1px] hover:bg-gray-50 focus:bg-[#E9ECEF] rounded-[4px] shadow-sm"
        onChange={handleChange}
      />
      {!isText && (
        <label htmlFor="input" className="absolute top-2 left-4">
          {placeholder} <span className="text-red-600">*</span>
        </label>
      )}

      {isValid && <img src={green_allow_icon} className="absolute top-[10px] right-4" />}
    </div>
  );
};

export default Input;
