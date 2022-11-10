import styles from "../Style/test.module.css"
import Webcam from "react-webcam";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Countdown from 'react-countdown';
import { api_url, test_duration } from "../../../config";



function RightAside(){
    const navigate = useNavigate();

    let timePast = parseInt(localStorage.getItem("timePast"))
    if(!timePast){
        timePast = 0;
    }

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
    
        const res = await axios.post(api_url + "/answers/checkAnswers", data, config)
    
        if(res.data.status == "success"){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            localStorage.removeItem("answers")
            localStorage.removeItem("timePast")
            document.exitFullscreen()
            navigate("/submitted")
        }
    }

    const timerTick = () => {
        timePast += 1000;
        localStorage.setItem("timePast", timePast)
    }

    return (
        <div>
            <div className={styles.testTimer}>

                <Countdown date={Date.now() + test_duration*60*1000 - timePast} onComplete={submitQuiz} onTick={timerTick} className={styles.testTime}/>

                <div className={styles.timerText}>TIME REMAINING</div>
            </div>
            <Webcam className={styles.testWebcam}/>
        </div>
    )
}

export default RightAside