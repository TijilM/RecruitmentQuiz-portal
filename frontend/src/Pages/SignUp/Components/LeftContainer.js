import React, { useState } from "react";

import axios from "axios";
import styles from "../Style/leftContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/black-logo.png";

// const url = "http://127.0.0.1:8000/api/v1/users/signup";
const url = "https://recruitment-api.ccstiet.com/api/v1/users/signup";

const LeftContainer = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [aNumber, setAnumber] = useState("");
  const [links, setLinks] = useState("");
  const [message, setMessage] = useState("");

  const [button, setButton] = useState(
    <button type="submit" className={styles.button}>
      <div>Submit</div>
      <div className={styles.arrow}>&rarr;</div>
    </button>
  );

  const submitForm = async (e) => {
    e.preventDefault();

    if (name && email && number && branch && aNumber) {
      setButton(
        <button type="submit" className={styles.button} disabled>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        </button>
      );
      try {
        const resp = await axios.post(url, {
          name: name,
          email: email,
          phoneNumber: number,
          branch: branch,
          applicationNumber: aNumber,
          links: links,
        });
        // console.log(resp.data);
        setName("");
        setEmail("");
        setNumber("");
        setBranch("");
        setAnumber("");
        setLinks("");
        setMessage("");
        setButton(
          <button type="submit" className={styles.button} disabled>
            <div>Registered!</div>
          </button>
        );
      } catch (error) {
        // console.log(error.response.data.error);
        const err_message = error.response.data.error;
        // console.log(err_message.split(" ")[0])
        if(err_message.split(" ")[0] == "E11000"){
          setMessage("User already exists");
        }else {
          setMessage("An error occurred")
        }
        // error.response.data.error == ""
        
        setButton(
          <button type="submit" className={styles.button}>
            <div>Submit</div>
            <div className={styles.arrow}>&rarr;</div>
          </button>
        );
      }

      // console.log(name, email);
    } else {
      alert("Please fill in all the data");
    }
  };

  return (
    <div className={styles.leftContainer}>
      <img src={logo} alt="ccs-logo" className={styles.logo} />
      <form
        action=""
        onSubmit={submitForm}
        className={styles.leftContainerForm}
      >
        <h3 className={styles.heading}>Register Here</h3>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={styles.inputBox}
        />
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={styles.inputBox}
        />
        <input
          type="text"
          name="phone"
          id="pnumber"
          autoComplete="off"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Phone Number"
          className={styles.inputBox}
        />
        <input
          type="text"
          name="branch"
          id="branch"
          autoComplete="off"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          placeholder="Branch"
          className={styles.inputBox}
        />
        <input
          type="text"
          name="aNumber"
          id="anumber"
          autoComplete="off"
          value={aNumber}
          onChange={(e) => setAnumber(e.target.value)}
          placeholder="Application Number"
          className={styles.inputBox}
        />
        <input
          type="text"
          name="links"
          id="links"
          autoComplete="off"
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          placeholder="Links (Github, Linkedin, etc.)"
          className={styles.inputBox}
        />
        {button}
        <small>{message}</small>
      </form>
    </div>
  );
};

export default LeftContainer;
