import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterLogin.scss";
import axios from "axios";
const RegisterLogin = () => {
  const [state, setState] = useState("Login");
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const Login = async () => {
    setMessage("");
    try {
      const response = await axios.post(
        "http://localhost:4000/login",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // if (response.status === 403) {console.log(response.data);}
      //any of the status except status 200 is
      //not caught in try block,it is going direct catch block
      //
      localStorage.setItem("auth-token", response.data.Token);
      window.location.replace("/");
    } catch (error) {
      if (!error.response) {
        setMessage(error.message);
      } else if (error.response) {
        if (
          error.response.status === 403 ||
          error.response.status === 500 ||
          error.response.status === 400
        )
          setMessage(error.response.data.message);
      } else {
        setMessage("Unhandled Error");
      }
    }
  };

  const SignUp = async () => {
    console.log("formData", formData);
    setMessage("");
    try {
      await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 403) setMessage(data.message);
          else if (data.success) {
            localStorage.setItem("auth-token", data.Token);
            navigate("/");
          } else if (data.success === false) {
            setMessage(data.error);
          }
        });
    } catch (error) {
      console.log("Error :", error);
    }
  };

  return (
    <div className="registerlogin">
      <div className="registerlogin-container">
        <h1>{state}</h1>
        <section className="registerlogin-container-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              placeholder="Enter name"
              name="username"
              value={formData.username}
              onChange={handlechange}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Enter email id"
            name="email"
            value={formData.email}
            onChange={handlechange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handlechange}
          />
        </section>
        <button
          onClick={() => {
            state === "Login" ? Login() : SignUp();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="registerlogin-container-signup">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="registerlogin-container-signup">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign Up here
            </span>
          </p>
        )}

        <div className="registerlogin-container-agree">
          <input type="checkbox" name="" />
          <p>By continuing ,I agree to the terms and condition</p>
        </div>
      </div>
      <p className="message">{message}</p>
    </div>
  );
};

export default RegisterLogin;
