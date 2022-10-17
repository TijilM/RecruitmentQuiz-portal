import styles from "../Style/test.module.css"
import Webcam from "react-webcam";

import Countdown from 'react-countdown';

function RightAside(){
    return (
        <div>
            <div className={styles.testTimer}>
               <Webcam />
                TIME REMAINING
                <div className={styles.testTime}><Countdown date={Date.now() + 15*60*1000} onComplete={()=>{}} /></div>
            </div>
        </div>
    )
}

export default RightAside