import React, { useEffect, useState } from "react";
import { FieldAttributes, useField } from "formik";
import green_allow_icon from "../assets/icons/green_allow_icon.svg";

type InputProps = { label: string } & FieldAttributes<{}>;

const Input: React.FC<InputProps> = ({ label, ...props }: any) => {
  const [isValid, setIsValid] = useState(false);

  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  useEffect(() => console.log(errorText), [errorText]);

  return (
    <div className="relative mb-4 ">
      <input
        {...field}
        className={`${
          errorText.trim()
            ? "bg-red-300 focus:bg-red-300"
            : "bg-white focus:bg-[#E9ECEF]"
        } w-full px-4 py-2 text-black outline-none border-b-[1px] hover:bg-gray-50 rounded-[4px] shadow-sm`}
      />

      {!field.value && (
        <label htmlFor="input" className="absolute top-2 left-4">
          {label} <span className="text-red-600">*</span>
        </label>
      )}

      {!errorText.trim() && (
        <img src={green_allow_icon} className="absolute top-[10px] right-4" />
      )}
    </div>
  );
};

export default Input;
