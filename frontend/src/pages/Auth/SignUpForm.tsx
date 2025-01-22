import { ChangeEvent, FormEvent, useState } from "react"
import { Link } from "react-router-dom"
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
  const [profileImage, setProfileImage] = useState<File | null>(null)

  // const navigate = useNavigate()

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!fullName) {
      setError("Please enter your full name")
      return
    }
    
    if (!validate(email)) {
      setError("Please enter a valid email address")
      return;
    }
    if (!username) {
      setError("Please enter a username")
      return;
    }

    if (password === "") {
      setError("Please enter a password")
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
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <AuthInput
            id="fullName"
            value={fullName}
            name="fullName"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value)
            }
            placeholder="John Doe"
            label="Full Name"
            type="text"
          />

          <AuthInput
            id="username"
            value={username}
            name="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            placeholder="@"
            label="Username"
            type="text"
            autoComplete="username"
          />

          <AuthInput
            id="email"
            value={email}
            name="email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="john@example.com"
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
            placeholder="Min 8 characters"
            label="Password"
            type="password"
          />
          <AuthInput
            id="confirmPassword"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            placeholder="Min 8 characters"
            label="Confirm Password"
            type="password"
          />
          <ProfilePhotoSelector
            id="profileImage"
            image={profileImage}
            setImage={setProfileImage}
          />
          </div>
          

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