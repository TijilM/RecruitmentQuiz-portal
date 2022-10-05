import React, { useState } from "react";

import logo from "../Assets/logo.png";
import axios from "axios";
import classes from "../Style/Form.module.css";

const url = "http://127.0.0.1:8000/api/v1/users/signup";
// const url = "https://recruitment-api.ccstiet.com/api/v1/users/signup";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [aNumber, setAnumber] = useState("");
  const [message, setMessage] = useState("");

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
        setName("");
        setEmail("");
        setNumber("");
        setBranch("");
        setAnumber("");
        setMessage("Registered Successfully");
      } catch (error) {
        setMessage("User already exists");
        console.log(error);
      }

      console.log(name, email);
    } else {
      alert("Please fill in all the data");
    }
  };

  return (
    <div className={classes.leftContainer}>
      <img src={logo} alt="CCS Logo" className={classes.logo} />
      <form action="" onSubmit={submitForm}>
        <h3>REGISTER HERE</h3>
        <div className={classes.inside}>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className={classes.inside}>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className={classes.inside}>
          <input
            type="text"
            name="phone"
            id="pnumber"
            autoComplete="off"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className={classes.inside}>
          <input
            type="text"
            name="branch"
            id="branch"
            autoComplete="off"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            placeholder="Branch"
          />
        </div>
        <div className={classes.inside}>
          <input
            type="text"
            name="aNumber"
            id="anumber"
            autoComplete="off"
            value={aNumber}
            onChange={(e) => setAnumber(e.target.value)}
            placeholder="Application Number"
          />
        </div>
        <button type="submit" className={classes.button}>
          <p>Submit</p>
          <div>&rarr;</div>
        </button>
        <small>{message}</small>
      </form>
    </div>
  );
};

export default Form;
