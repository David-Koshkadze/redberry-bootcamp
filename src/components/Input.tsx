import { useEffect, useRef, useState } from "react";
import { useField } from "formik";
import green_allow_icon from "../assets/icons/green_allow_icon.svg";

const Input = ({ label, ...props }: any) => {
  const [isText, setIsText] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const [field, meta] = useField(props);

  console.log(field.value);
  useEffect(() => console.log("Rendered"), []);

  return (
    <div className="relative mb-4 ">
      <input
        {...field}
        {...props}
        className="w-full px-4 py-2 text-black outline-none border-b-[1px] hover:bg-gray-50 focus:bg-[#E9ECEF] rounded-[4px] shadow-sm"
      />

      {isText && (
        <label htmlFor="input" className="absolute top-2 left-4">
          {props.label} <span className="text-red-600">*</span>
        </label>
      )}

      {isValid && (
        <img src={green_allow_icon} className="absolute top-[10px] right-4" />
      )}
    </div>
  );
};

export default Input;
