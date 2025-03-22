import React, { useState } from "react";
import "./auth.css"; // Assuming you have CSS file named styles.css for your styles
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();
  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const submitSignup = async (e) => {
    e.preventDefault();

    // Prepare data to send to the API
    const data = {
      name: name,
      mailId: email,
      password: password,
      contact: contact, // Add other fields if needed
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/createuser",
        data
      );
      if (response) {
        // Handle successful signup (e.g., show success message, redirect)
        console.log("User created successfully!");
        navigate("/user");

      } else {
        // Handle signup errors (e.g., display error message)
        console.error("Signup failed:", response.data);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const submitSignin = async (e) => {
    e.preventDefault();

    // Prepare data to send to the API
    const data = {
      mailId: email,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:5000/auth/signin", data);
      if (response) {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        // Handle successful login (e.g., store user data, redirect)
        console.log("User logged in!");
        navigate("/");

      } else {
        // Handle login errors (e.g., display error message)
        console.error("Login failed:", response.data);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div
      className={`authcontainer container ${isRightPanelActive ? "right-panel-active" : ""}`}
    >
      <div className="form-container sign-up-container">
        <form
          // method="post"
          // action="/auth/createuser"
          onSubmit={submitSignup}
        >
          <h1>Sign Up</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <br />
          <button type="submit">
            Sign up Submit
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form onSubmit={submitSignin}>
          <h1>LOGIN</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <a href="#">Forgot your password?</a>
          <button type="submit">Login Submit</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Hello User!</h1>
            <p>To stay connected with us please enter your personal info</p>
            <button className="ghost" onClick={togglePanel}>
              Login
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>New User?</h1>
            <p>Enter your personal details and start your journey with us </p>
            <button className="ghost" onClick={togglePanel}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
