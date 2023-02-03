import React, { useState, useContext } from "react";
import "./Sign.css";
import { images } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { netflixAuthContext } from "../App";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleSignIn } = useContext(netflixAuthContext);
  const Navigate = useNavigate();

  const handleSigningIn = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await handleSignIn(email, password);
      Navigate("/netflix-clone-authentication/home");
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
          Sign In
        </h2>

        <form onSubmit={handleSigningIn} className="app__login-content_form">
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
          <button>Sign In</button>
        </form>

        <p
          className="p__opensans"
          style={{ color: "var(--color-gray)", fontSize: "14px" }}
        >
          New to Netflix?
          <span>
            <Link to="/netflix-clone-authentication/sign-up"> Sign up now</Link>
          </span>
        </p>
        <p
          className="p__opensans forgot-pswd"
          style={{
            color: "var(--color-white)",
            fontSize: "14px",
            marginTop: "0.5rem",
          }}
        >
          <Link to="/netflix-clone-authentication/reset-pswd">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
