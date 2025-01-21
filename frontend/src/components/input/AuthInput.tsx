import { ChangeEvent, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


interface AuthInputProps {
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  type,
  label,
  placeholder,
  value,
  onChange,
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-6">
      <label htmlFor={label} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box relative">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : "text"
          }
          placeholder={placeholder}
          value={value}
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
