import React from "react";
import styles from "../Style/timer.module.css";
function Timer () {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "November, 03, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
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
  );
};
export default Timer

