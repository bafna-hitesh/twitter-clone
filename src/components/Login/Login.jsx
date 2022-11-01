import React, { useState } from "react";
import { useNavigate, redirect, json } from "react-router-dom";
import { useData } from "../context";
import InputPasswordField from "./InputPasswordField";
// import { Link } from "react-router-dom";
import "./styles.css";

const Login = () => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const { setIsLogin } = useData();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [notify, setNotify] = useState("");

  const handleOnChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      return setNotify("please fill all required fields");
    }
    if (!passRegex.test(user.password)) {
      setNotify("please give right input");
    } else {
      setNotify("");

      localStorage.setItem("loginStatus", JSON.stringify(true));
      setIsLogin(true);

      navigate("/home");
      console.log("ok continue", ans);
    }
  };

  return (
    <div className="form-container">
      <h1 className="login-header">LOGIN</h1>
      <div className="login-form">
        <div className="row">
          <input
            className="form-field "
            id="input-email"
            type="text"
            placeholder="Enter your email here"
            required
            name="email"
            value={user.email}
            pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
            onChange={handleOnChangeInput}
          />
          <span className="err-msg">🚩 Invalid Email Address!</span>
        </div>
        <div className="row">
          <InputPasswordField
            name={"password"}
            value={user.password}
            handleOnChangeInput={handleOnChangeInput}
            placeholder="Enter your password here"
          />
        </div>
        <button
          className="login-btn"
          type="submit"
          onClick={(e) => handleFormSubmit(e)}
        >
          LOGIN
        </button>
        <small className="server-error">{notify}</small>
        <div className="body-cp-md padding-bottom-1rem">
          Not a user yet?
          <a to="/signup">
            <span className="login-signup-text">Create your account</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
