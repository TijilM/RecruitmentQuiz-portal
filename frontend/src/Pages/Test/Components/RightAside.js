import styles from "../Style/test.module.css"
import Webcam from "react-webcam";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Countdown from 'react-countdown';



function RightAside(){
    const navigate = useNavigate();

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
    
        const res = await axios.post("https://recruitment-api.ccstiet.com/api/v1/answers/checkAnswers", data, config)
    
        if(res.data.status == "success"){
            localStorage.removeItem("jwt")
            localStorage.remoteItem("user")
            localStorage.removeItem("answers")
            navigate("/submitted")
        }
    }

    return (
        <div>
            <div className={styles.testTimer}>
               <Webcam />
                TIME REMAINING
                <div className={styles.testTime}><Countdown date={Date.now() + 15*60*1000} onComplete={submitQuiz} /></div>
            </div>
        </div>
    )
}

export default RightAside