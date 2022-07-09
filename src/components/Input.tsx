import React, { useEffect, useState } from "react";
import { FieldAttributes, useField } from "formik";
import green_allow_icon from "../assets/icons/green_allow_icon.svg";

type InputProps = { label: string } & FieldAttributes<{}>;

const Input: React.FC<InputProps> = ({ label, ...props }: any) => {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState("");

  const [field, meta] = useField(props);

  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div className="relative mb-4">
      <input
        {...field}
        className={`${
          meta.error && meta.touched
            ? "bg-red-100 focus:bg-red-100 hover:bg-red-100 text-[#DC3545]"
            : "bg-white focus:bg-[#E9ECEF]"
        } w-full px-4 py-2 text-black outline-none border-b-[1px] hover:bg-gray-50 rounded-[4px]`}
      />

      {!field.value && (
        <label htmlFor="input" className="absolute top-2 left-4">
          {label} <span className="text-red-600">*</span>
        </label>
      )}

      {(!meta.error && meta.touched) && (
        <img src={green_allow_icon} className="absolute top-[10px] right-4" />
      )}
    </div>
  );
};

export default Input;
