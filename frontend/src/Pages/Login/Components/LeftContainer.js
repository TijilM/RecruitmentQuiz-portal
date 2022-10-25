import React, { useState } from "react";
import axios from "axios";
import styles from "../Style/leftContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/black-logo.png";
import { useNavigate } from "react-router-dom";
const url = "https://recruitment-api.ccstiet.com/api/v1/users/login";
// const url = "http://127.0.0.1:8000/api/v1/users/login";

const LeftContainer = (props) => {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
        axios.post(url, {
          email: email.trim(),
          password: password,
        }).then((response) => {
          
          if(response.data.status == "success"){
            const users = response.data
            console.log(users.data.user)
            if(users.data.user.hasAttempted == true){
              navigate("/submitted")
            }else {
              localStorage.setItem('jwt', users.token)
              localStorage.setItem('user', JSON.stringify(users))
              // console.log('users', users) // undefined
            
              // console.log(resp.data);
              setPassword("");
              setEmail("");
              

              setButton(
                <button type="submit" className={styles.button} disabled>
                  <div>Logging In</div>
                </button>
              );

              // document.documentElement.requestFullscreen();
              navigate("/instructions")
            }

            
          }          
        })
        .catch(error => {
          setButton(
            <button type="submit" className={styles.button}>
              <div>Login</div>
              <div className={styles.arrow}>&rarr;</div>
            </button>
          )

          setMessage("Invalid email or password")
        }) 
      } catch (error) {
        // console.log("in error")
        // console.log(error)
        setButton(
          <button type="submit" className={styles.button}>
            <div>Login</div>
            <div className={styles.arrow}>&rarr;</div>
          </button>
        );

        setMessage("An error occurred")
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
        <small>{message}</small>
      </form>
    </div>
  );
};

export default LeftContainer;
