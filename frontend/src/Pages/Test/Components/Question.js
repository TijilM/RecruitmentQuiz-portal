import styles from "../Style/question.module.css"   
import {useEffect,useState} from "react";


function Question(props){




    // console.log(props.qid)

    const options = props.question.options.map((option, indexVal) => {
        return (
            <label className={styles.testOption} key={indexVal}>
                <input type="radio" name={props.question._id} value={indexVal} onChange={props.optionClicked} />
                {option}
            </label>    
        )
    })


   


    return (
        <div className={styles.questions}>
            <div className={styles.testQuestion}><span className={styles.questionNumber}>{props.index+1})</span> {props.question.question}</div>
            <div className={styles.testOptions}>
                {options}
            </div>
            
        </div>
    )
}

export default Question