import React, { useState } from "react";
import logo from "../Assets/logo.png";
import axios from "axios";

axios.defaults.withCredentials = true;

const url = "http://127.0.0.1:8000/api/v1/users/login";
// const url = "https://recruitment-api.ccstiet.com/api/v1/users/signup";
const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (name && email) {
      try {
        const resp = await axios.post(url, {
            email: email,
            password: password,
        });
        console.log(resp.data);
        setMessage("Logging in...")
        // window.location.href = "/instructions";
      } catch (error) {
        setMessage("Invalid email or password")
        console.log(error);
      }

      console.log(name, email);
    } else {
      alert("Please fill in the data");
    }
  };
  return (
    <>
      <div className="container">
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="regform">
          <div className="lefthidden">
            <img src={logo} alt="Logo" className="signup-logo" />
          </div>
          <div className="right">
            <form action="" onSubmit={submitForm}>
                <h3>RECRUITMENT QUIZ</h3>
                <h4>LOGIN NOW!</h4>
              <div className="inside">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="inside">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="inside">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
               </div>

              <button typ="submit" className="button">
                Submit
              </button>
              <small>{message}</small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
