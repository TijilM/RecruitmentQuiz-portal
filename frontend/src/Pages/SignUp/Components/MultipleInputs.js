import React, { useState } from "react";
import logo from "../Assets/logo.png";
import axios from "axios";
// const url = "http://127.0.0.1:8000/api/v1/users/signup";
const url = "https://recruitment-api.ccstiet.com/api/v1/users/signup";
const MultipleInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [aNumber, setAnumber] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    if (name && email && number && branch && aNumber) {
      try {
        const resp = await axios.post(url, {
          name: name,
          email: email,
          phoneNumber: number,
          branch: branch,
          applicationNumber: aNumber,
        });
        console.log(resp.data);
      } catch (error) {
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
              <h3>REGISTER HERE</h3>
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
                <label htmlFor="password">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="pnumber"
                  autoComplete="off"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="inside">
                <label htmlFor="password">Branch</label>
                <input
                  type="text"
                  name="branch"
                  id="branch"
                  autoComplete="off"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div className="inside">
                <label htmlFor="password">Application Number</label>
                <input
                  type="text"
                  name="aNumber"
                  id="anumber"
                  autoComplete="off"
                  value={aNumber}
                  onChange={(e) => setAnumber(e.target.value)}
                />
              </div>
              <button typ="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleInputs;
