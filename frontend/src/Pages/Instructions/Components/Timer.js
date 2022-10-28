import React, {useState} from "react";
import styles from "../Style/timer.module.css";
import { useNavigate, redirect } from "react-router-dom"



function Timer ({updateState}) {
  const navigate = useNavigate();

  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const [button, setButton] = React.useState(
    
  )

  const [permissionsGranted, setPermissionsGranted] = useState(false)
  const [timerDone, setTimerDone] = useState(false)
  const [message, setMessage] = useState("") 
  const [count, setCount] = useState(0)
  // const [deadline, setDeadline] = useState("");


  const startTest = () => {
    // const user = localStorage.getItem("user")
    // console.log(props.updateState)
    updateState()
    // console.log(user)
    navigate("/test");
  }

  const user = JSON.parse(localStorage.getItem("user"))
  // console.log(user.data.user.shift)
  const shift = user.data.user.shift;
  let deadline = ""
  if(shift == 1){
    deadline = "October, 28, 2022 21:00:00";
  }else {
    deadline = "October, 28, 2022 21:30:00";

  }

  

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();    

    setDays(Math.max(0,Math.floor(time / (1000 * 60 * 60 * 24))));
    setHours(Math.max(0,Math.floor((time / (1000 * 60 * 60)) % 24)));
    setMinutes(Math.max(0,Math.floor((time / 1000 / 60) % 60)));
    setSeconds(Math.max(0,Math.floor((time / 1000) % 60)));
  };



  const timerFinished = () => {
    // console.log("checking cond")

    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    .then((stream) => {
      // console.log("permission granted")
      setButton(
        <div><input type="button" value="Start Test" onClick={startTest} className={styles.startTest} /></div>
      )
      setMessage("")
      setPermissionsGranted(true)
      // setMessage("")
    })
    .catch((err) => {
      // console.log("permission not granted")
      setMessage("* Give Camera and Microphone access and refresh this page to gain access to test *")
    });
  }


  React.useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    })
    .then((stream) => {
      setMessage("")
    })
    .catch((err) => {
      setMessage("* Give Camera and Microphone access and refresh this page *")
    });
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      if(Date.now() - Date.parse(deadline) > -1000){
        // console.log("timer done")
        clearInterval(interval)
 

        timerFinished()
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
      <div className={styles.message}>{message}</div>
    </div>
  );
};
export default Timer

