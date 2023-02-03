import React, { useState, useContext } from "react";
import "./Sign.css";
import { images } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { netflixAuthContext } from "../App";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleSignUp } = useContext(netflixAuthContext);
  const Navigate = useNavigate();

  const handleSigningUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await handleSignUp(email, password);
      Navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className="app__login flex__center">
      <img src={images.netflixBg} alt="netflix bg" />
      <div className="app__login-gradient" />

      <img
        className="app__netflix-logo"
        src={images.netflix}
        alt="netflix logo"
      />

      <div className="app__login-content">
        <h2
          className="headtext__opensans"
          style={{
            fontWeight: "700",
            marginBottom: "1rem",
            fontSize: "30px",
          }}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSigningUp} className="app__login-content_form">
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            autoComplete="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="p__opensans error">{error}</p>}

          <button>Sign Up</button>
        </form>

        <p
          className="p__opensans"
          style={{ color: "var(--color-gray)", fontSize: "14px" }}
        >
          Have an Account?
          <span>
            <Link to="/"> Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
