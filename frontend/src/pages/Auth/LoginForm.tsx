import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthInput from "src/components/input/AuthInput";
import AuthLayout from "src/components/layout/AuthLayout";
import { validate } from "src/utils/helpers";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate()

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate(email)) {
      setError("Please enter a valid email address");
      return;
    } 

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Implement login logic
    try {
      console.log("Login successful");
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
    }
      
  };

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to login.
        </p>

        <form onSubmit={handleLogin}>
          <AuthInput
            id="email"
            value={email}
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Email Address"
            label="Email"
            type="email"
            autoComplete="email"
          />
          <AuthInput
            id="password"
            value={password}
            name="password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            label="Password"
            type="password"
          />

          {error && <p className="text-red-600 text-xs pb-2.5">{error}</p>}

          <button
            type="submit"
            className="bg-primary text-white w-full py-3 rounded-md my-3 uppercase hover:bg-primary/85 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-slate-700 mt-3">
          Don't have an account?{" "}
          <span className="text-primary cursor-pointer">
            <Link to="/register" className="font-medium underline">
              Create an account
            </Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  );
};
export default LoginForm;
