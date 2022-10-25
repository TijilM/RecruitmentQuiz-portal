import LeftAside from "./Components/LeftAside"
import Main from "./Components/Main"
import RightAside from "./Components/RightAside"
import styles from "./Style/test.module.css"
import { useEffect,useState } from 'react';
import axios from "axios";
import $ from 'jquery';
// import { useNavigate } from "react-router-dom";

function Test(){

    // const navigate = useNavigate()

    // const user = localStorage.getItem("user")

    // console.log(user)

    // if(!user){
    //     navigate("/login")
    // }

    const [cheatStrikes, setCheatStrikes] = useState(0);

$(window).blur(async function() {
    console.log("cheated")
    setCheatStrikes(prevStrikes => prevStrikes+1)
    
    // alert("Warning! You are being monitored \n cheat strikes="+{cheatStrikes}+"/3");
    // console.log({cheatStrikes});
    //  setCheatStrikes(cheatStrikes+1);\
    // alert("Warning! You are being monitored ");

    const token = localStorage.getItem("jwt")

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    }   

    const data = {

    }

    // const res = await axios.patch("http://127.0.0.1:8000/api/v1/users/cheatAttempt", data, config)
    



});

    return (
        <div className={styles.testPage}>
            <div className={styles.testLeftAside}>
                <LeftAside />
            </div>
            <div className={styles.testMain}>
                <Main />
            </div>
            <div className={styles.testRightAside}>
                <RightAside />
            </div>
        </div>
    )
}   

export default Test