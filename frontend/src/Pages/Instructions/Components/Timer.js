import React from "react";
import styles from "../Style/timer.module.css";
import { useNavigate } from "react-router-dom"

function Timer () {
  const navigate = useNavigate();

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const [button, setButton] = React.useState(
    
  )

  const startTest = () => {
    document.documentElement.requestFullscreen()
    const user = localStorage.getItem("user")
    console.log(user)
    navigate("/test");
  }


  const deadline = "October, 25, 2022 21:00:00";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.max(0,Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(Math.max(0,Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(Math.max(0,Math.floor((time / 1000 / 60) % 60)));
    setSeconds(Math.max(0,Math.floor((time / 1000) % 60)));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(Date.now() - Date.parse(deadline) > -1000){
        console.log("timer done")
        clearInterval(interval)
        setButton(
          <div><input type="Button" value="Start Test" onClick={startTest} className={styles.startTest} /></div>
        )
      }else {

      }

      getTime()
      
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
      <div>
        <div className={styles.timer} role="timer">
        <div className={styles.col}>
          <div className={styles.box}>
            <p id="day">{days < 10 ? "0" + days : days}</p>
            <span className={styles.text}>Days</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.box}>
            <p id="hour">{hours < 10 ? "0" + hours : hours}</p>
            <span className={styles.text}>Hours</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.box}>
            <p id="minute">{minutes < 10 ? "0" + minutes : minutes}</p>
            <span className={styles.text}>Minutes</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.box}>
            <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
            <span className={styles.text}>Seconds</span>
          </div>
        </div>
      </div>
      {button}
    </div>
  );
};
export default Timer

