import React, { useEffect, useState } from "react";
import Question from "./Question";
import styles from "../Style/question.module.css";
import axios from "axios";

function Main() {

    const [questionsElem, setQuestionsElem] = useState([])
    // let questionsElem

    useEffect(() => {
        async function fetchQuestions(){
            const token = localStorage.getItem("jwt")

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }

            const res = await axios.get("http://127.0.0.1:8000/api/v1/questions/getQuestions", config);
            console.log(res);
            const questions = res.data.data.questions
            // setQuestions(res.data.data.questions)
            // console.log(questions)
            setQuestionsElem(questions.map(ques => {
                // console.log(ques[0].question)
                return (
                    <Question 
                        question = {ques[0]}
                        key = {ques[0]._id}
                    />
                )
                
                
            }))

            console.log(questionsElem)


        }

        fetchQuestions()


        
        

    }, []);

    return (
        // <form>
        <div>
            <div className={styles.boxcontainer}>
                <div>
                    <h1></h1>
                    {questionsElem}
                </div>
            </div>

            {/* <Question qid="2" /> */}
        </div>
        // </form>
    );
}

export default Main;
