import React from 'react'
import Question from "./Question"
import styles from "../Style/question.module.css"

function Main(){
    return (
        // <form>
            <div>
            
            <div className={styles.boxcontainer}>
    <div>
      <h1></h1>
      <p> <Question qid="1"/></p>
    </div>
  </div>
               
                <Question qid="2"/>
            </div>
        // </form>
    )
}

export default Main