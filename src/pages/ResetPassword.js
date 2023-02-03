import React, { useState, useContext } from "react";
import "./Sign.css";
import { images } from "../constants";
import { Link, useNavigate } from "react-router-dom";
import { netflixAuthContext } from "../App";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { handlePasswordReset } = useContext(netflixAuthContext);
  const Navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await handlePasswordReset(email);
      Navigate("/netflix-clone-authentication/");
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
            fontWeight: "400",
            marginBottom: "1rem",
            fontSize: "20px",
          }}
        >
          Enter Registered Email
        </h2>

        <form onSubmit={handleReset} className="app__login-content_form">
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="p__opensans error">{error}</p>}

          <button>Submit</button>
        </form>
        <p
          className="p__opensans"
          style={{ color: "var(--color-white)", fontSize: "16px" }}
        >
          <Link to="/netflix-clone-authentication/">Cancel Reset</Link>
        </p>
      </div>
    </div>
  );
}

export default ResetPassword;
