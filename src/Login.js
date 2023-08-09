import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState(true);
  const open = () => {
    if (username === "" && password === "") {
      setValue(false);
    } else {
      setValue(true);
      localStorage.setItem("login", true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/");
    }
  };
  return (
    <div className="container login">
      <div className="wrapper">
        <div className="content-box">
          <h1>
            Welcome to <span>Dashboard</span>
          </h1>
        </div>

        <div className="inputs">
          <h3>Login</h3>
          <input
            placeholder="user@name"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={open} className="btn">
          LOGIN
        </button>
        {value ? (
          <></>
        ) : (
          <>
            <h3
              style={{
                color: "#fff",
                padding: "10px 0",
                textAlign: "right",
              }}
            >
              * Field are required
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
