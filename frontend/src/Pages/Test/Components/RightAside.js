import styles from "../Style/test.module.css"

function RightAside(){
    return (
        <div>
            <div className={styles.testTimer}>
                <div className={styles.testTime}>09:11</div>
                TIME REMAINING
            </div>
        </div>
    )
}

export default RightAside