import styles from "../Style/test.module.css"   
import {useEffect,useState} from "react";


function Question(props){




    // console.log(props.qid)

    const options = props.question.options.map((option) => {
        return (
            <label className={styles.testOption}>
                <input type="radio" name={props.question._id} id={option} />
                {option}
            </label>
        )
    })


   


    return (
        <div>
            <div className={styles.testQuestion}>{props.index+1} {props.question.question}</div>
            <div className={styles.testOptions}>
                {options}
            </div>
            
        </div>
    )
}

export default Question