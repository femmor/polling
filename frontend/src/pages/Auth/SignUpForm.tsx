import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AuthInput from "src/components/input/AuthInput"
import ProfilePhotoSelector from "src/components/input/ProfilePhotoSelector"
import AuthLayout from "src/components/layout/AuthLayout"
import { validate } from "src/utils/helpers"

const SignUpForm = () => {
  const [fullName, setFullName] = useState<string>("")
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const [profileImage, setProfileImage] = useState<string>("")

  const navigate = useNavigate()

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields")
      return
    }
    
    if (!validate(email)) {
      setError("Please enter a valid email address")
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return;
    }

    setError("")

    // Implement registration logic
    console.log("Registration successful")
  }

  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to sign up.
        </p>

        <form onSubmit={handleRegister}>
          <AuthInput
            value={fullName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value)
            }
            placeholder="Full Name"
            label="Full Name"
            type="text"
          />

          <AuthInput
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder="Username"
            label="Username"
            type="text"
          />

          <AuthInput
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="Email Address"
            label="Email"
            type="email"
          />
          <AuthInput
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Password"
            label="Password"
            type="password"
          />
          <AuthInput
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Confirm Password"
            label="Confirm Password"
            type="password"
          />
          <ProfilePhotoSelector 
            image={profileImage}
            setImage={setProfileImage}
          />

          {error && <p className="text-red-600 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="bg-primary text-white w-full py-2 rounded-md my-3 uppercase hover:bg-primary/85 transition duration-200">
            Create Account
          </button>
        </form>
        <p className="text-xs text-slate-700 mt-3">
          Already have an account?{" "}
          <span className="text-primary cursor-pointer">
            <Link to="/login" className="font-medium underline">
              Login
            </Link>
          </span>
        </p>
      </div>
    </AuthLayout>
  )
}
export default SignUpForm