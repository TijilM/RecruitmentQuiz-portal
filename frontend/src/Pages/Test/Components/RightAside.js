import styles from "../Style/test.module.css"
import Webcam from "react-webcam";

function RightAside(){
    return (
        <div>
            <div className={styles.testTimer}>
                <div className={styles.testTime}>09:11</div>
                TIME REMAINING
                <Webcam />
            </div>
        </div>
    )
}

export default RightAside