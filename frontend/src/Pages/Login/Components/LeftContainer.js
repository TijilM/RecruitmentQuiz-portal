import React, { useState } from "react";
import axios from "axios";
import styles from "../Style/leftContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/black-logo.png";
const url = "https://recruitment-api.ccstiet.com/api/v1/users/signup";

const LeftContainer = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [button, setButton] = useState(
    <button type="submit" className={styles.button}>
      <div>Login</div>
      <div className={styles.arrow}>&rarr;</div>
    </button>
  );

  const submitForm = async (e) => {
    e.preventDefault();

    if (password && email ) { 
      setButton(
        <button type="submit" className={styles.button} disabled>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        </button>
      );
      try {
        const resp = await axios.post(url, {
         
          email: email,
          password: password
        });
        // console.log(resp.data);
        setPassword("");
        setEmail("");
        
        const checklist = document.getElementsByTagName("input");
        for (const element of checklist) {
          element.checked = false;
        }

        setButton(
          <button type="submit" className={styles.button} disabled>
            <div>Loging In</div>
          </button>
        );
      } catch (error) {
        setButton(
          <button type="submit" className={styles.button}>
            <div>Submit</div>
            <div className={styles.arrow}>&rarr;</div>
          </button>
        );
      }

    } else {
      alert("Please fill in all the data");
    }
  };

  return (
    <div className={styles.leftContainer}>
      <img src={logo} alt="ccs-logo" className={styles.logo} />
      <h3 className={styles.heading}>Login Now!</h3>
      <form
        action=""
        onSubmit={submitForm}
        className={styles.leftContainerForm}
      >
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email "
          className={styles.inputBox}
        />
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className={styles.inputBox}
        />
        {button}
      </form>
    </div>
  );
};

export default LeftContainer;
