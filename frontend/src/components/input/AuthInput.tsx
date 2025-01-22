import { ChangeEvent, HTMLInputAutoCompleteAttribute, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


interface AuthInputProps {
  id?: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  name: string;
  autoComplete?: HTMLInputAutoCompleteAttribute | undefined
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  id,
  type,
  label,
  placeholder,
  value,
  name,
  autoComplete,
  onChange,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <label htmlFor={id} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box relative">
        <input
          id={id}
          type={
            type === "password" ? (showPassword ? "text" : "password") : "text"
          }
          placeholder={placeholder}
          value={value}
          name={name}
          autoComplete={autoComplete}
          onChange={onChange}
          className="w-full bg-transparent outline-none"
        />
        {type === "password" ? (
          <span className="absolute right-3 top-3">
            {showPassword ? (
              <FaRegEyeSlash
                className="text-slate-600 cursor-pointer absolute right-1"
                onClick={togglePassword}
                size={20}
                title="Hide Password"
              />
            ) : (
              <FaRegEye
                className="text-primary cursor-pointer absolute right-1"
                onClick={togglePassword}
                size={20}
                title="Show Password"
              />
            )}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default AuthInput;
