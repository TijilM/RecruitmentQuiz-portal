import styles from "../Style/test.module.css"


function Question(props){
    console.log(props.qid)
    return (
        <div>
            
            <div className={styles.testQuestion}>Who is the founder of Google?</div>
            <div className={styles.testOptions}>
                <label className={styles.testOption}>
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
                <label className={styles.testOption}>
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
                <label className={styles.testOption}>
                    <input type="radio" name={props.qid} />
                    Aditya Parmar
                </label>
            </div>
        </div>
    )
}

export default Question