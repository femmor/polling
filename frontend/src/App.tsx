import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import "./App.css"
import LoginForm from "./pages/Auth/LoginForm"
import SignUpForm from "./pages/Auth/SignUpForm"
import Home from "./pages/Dashboard/Home"
import CreatePoll from "./pages/Dashboard/CreatePoll"
import MyPolls from "./pages/Dashboard/MyPolls"
import VotedPolls from "./pages/Dashboard/VotedPolls"
import Bookmarks from "./pages/Dashboard/Bookmarks"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<SignUpForm />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/my-polls" element={<MyPolls />} />
          <Route path="/voted-polls" element={<VotedPolls />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// Defines the root component to handle initial redirect
const Root = () => {
  // Check if user is authenticated
  const isAuthenticated = !!localStorage.getItem("token")

  // Redirect to dashboard if user is authenticated else redirect to login
  return (
    <Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />
  )
}