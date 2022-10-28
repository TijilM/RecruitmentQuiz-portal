import styles from "../Style/test.module.css"
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

// const baseURL = "https://recruitment-api.ccstiet.com/api/v1/users/profile";



// console.log(User.data.user)
function LeftAside(){
    const navigate = useNavigate()

    document.documentElement.requestFullscreen()
    const [cheatAlert, setCheatAlert] = useState([])     
    const [disqualified, setDisqualified] = useState(0)

    


    const submitQuiz = async () => {
   
        const token = localStorage.getItem("jwt")

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }

        const storedAnswers = JSON.parse(localStorage.getItem("answers"))
        const keys = Object.keys(storedAnswers)

        let finalAnswers = []
        for(let i=0; i<keys.length; i++){

            finalAnswers.push([keys[i], storedAnswers[keys[i]]])
        }


        const data = {
            "questionIdsAndAnswers": finalAnswers,
        }

        // console.log("data", data)

        // const res = await axios.post("https://recruitment-api.ccstiet.com/api/v1/answers/checkAnswers", data, config)
        const res = await axios.post("http://127.0.0.1:8000/api/v1/answers/checkAnswers", data, config)

        if(res.data.status == "success"){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            localStorage.removeItem("answers")
            localStorage.removeItem("timePast")
            document.exitFullscreen()
            navigate("/disqualified");
        }

    }
    useEffect(() => {
        setCheatAlert(() => {
                
            return (
               <div className={styles.cheatAlert}>
                    <h3>Do not refresh the page or close the tab. Doing so will result in disqualification.</h3>
                </div>
    
            )
            
            
        })
    }, []);
    

    $(window).blur(function() {
        if(!document.hasFocus()) {
            setCheatAlert(() => {
                
                return (
                   <div className={styles.cheatAlert}>
                        <h3>Final warning!</h3>
                    </div>

                )
                
                
            })
            setDisqualified(disqualified + 1);
            
        }
    
});
useEffect(() => {
if(disqualified > 2) {
    
    submitQuiz();
}

}, [disqualified])
    


    const localUser = localStorage.getItem("user")
  
    const User = JSON.parse(localUser);


    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("jwt")
        localStorage.removeItem("answers")
        // localStorage.removeItem("timePast")

        navigate("/")
    }

    return (
        <div>
            <img src={require("../Assets/Traced-Logo.png")} alt="ccsLogo" className={styles.testLogo} />
            <hr className={styles.testLeftAsideLine}/>
            <div className={styles.testUser}>
                {/* <div className={styles.testName}>Aditya Parmar</div>
                <div className={styles.testEmail}>aditya@gmail.com</div> */}
                <div className={styles.testName}>{User.data.user.name}</div>
                <div className={styles.testEmail}>{User.data.user.email}</div>
            </div>
            <div>{cheatAlert}</div>

            <div className={styles.testLeftAsideBottom}>
                <div className={styles.testContact}>
                    <div className={styles.testName}>CONTACT US</div>
                    <div className={styles.testEmail}>ccs@thapar.edu</div>
                </div>
                <hr className={styles.testLeftAsideLine}/>
                <button className={styles.testLogout} onClick={logout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default LeftAside
