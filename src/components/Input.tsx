import React, { useState } from "react";
import { useField } from "formik";
import green_allow_icon from "../assets/icons/green_allow_icon.svg";

type InputProps = {
  type: string;
  name: string;
  label: string;
  required?: boolean;
};

const Input = ({ label, ...props }: InputProps) => {
  const [value, setValue] = useState("");
  const [isText, setIsText] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [field, meta] = useField(props);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (event.target.value.length > 0) {
      setIsText(true);
    } else {
      setIsText(false);
    }
  };

  return (
    <div className="relative">
      <input
        {...props}
        {...field}
        value={value}
        className="w-full px-4 py-2 text-black outline-none border-b-[1px] hover:bg-gray-50 focus:bg-[#E9ECEF] rounded-[4px] shadow-sm"
        onChange={handleChange}
      />

      {!isText && (
        <label htmlFor="input" className="absolute top-2 left-4">
          {label} <span className="text-red-600">*</span>
        </label>
      )}

      {isValid && (
        <img src={green_allow_icon} className="absolute top-[10px] right-4" />
      )}
    </div>
  );
};

export default Input;
