import React, { useEffect, useState, useMemo } from "react";
import Question from "./Question";
import styles from "../Style/question.module.css";
import axios from "axios";

function Main() {

    // const [questions, setQuestions] = useState([])
    const [questionsElem, setQuestionsElem] = useState([])
    const [answers, setAnswers] = useState({})


    const optionClicked = (e) => {
        setAnswers(prevAns => (
            {...prevAns, [e.target.name]: e.target.value}
        ))
    }

    
    useEffect(() => {
        async function fetchQuestions(){
            const token = localStorage.getItem("jwt")

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }

            const res = await axios.get("https://recruitment-api.ccstiet.com/api/v1/questions/getQuestions", config);

            const questions = res.data.data.questions;


            setQuestionsElem(questions.map((ques, index) => {
                
                

    
                return (
                    <Question
                        question = {ques[0]}
                        index = {index}
                        key = {ques[0]._id}
                        optionClicked = {optionClicked}
                    />
                )
                
                
            }))

            const initialAnswers = {};

            questions.forEach((ques) => {
                initialAnswers[ques[0]._id] = "unanswered";
            })
    
            setAnswers(initialAnswers)
        }

        fetchQuestions()


        
    }, []);


    useEffect(() => {
        console.log("questions changed")
    }, [questionsElem])

    useEffect(() => {
        console.log("called")
        console.log(answers)
        localStorage.setItem("answers", JSON.stringify(answers));
    }, [answers])


    const submitQuiz = async () => {
        // console.log(answers)

        // let answerArray = []

        // for(int i=0; )

    //     const submission = {

    //     }


        const token = localStorage.getItem("jwt")

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }

        const storedAnswers = JSON.parse(localStorage.getItem("answers"))
        // console.log(storedAnswers)
        const keys = Object.keys(storedAnswers)

        let finalAnswers = []
        for(let i=0; i<keys.length; i++){
            // console.log("loop run")
            // console.log(keys[i], storedAnswers[keys[i]])
            finalAnswers.push([keys[i], storedAnswers[keys[i]]])
        }

        // console.log(finalAnswers)

        const data = {
            "questionIdsAndAnswers": finalAnswers,
        }

        const res = await axios.post("https://recruitment-api.ccstiet.com/api/v1/answers/checkAnswers", data, config)
    }


    // console.log(questionsElem)
    // localStorage.setItem("answers", answers)

    // console.log(answers)

    return (
        // <form>
        <div>
            <div className={styles.boxcontainer}>
                <div>
                    <h1>Recruitment Quiz</h1>
                    {questionsElem}
                </div>
            </div>

            {/* <Question qid="2" /> */}

            <input type="button" onClick={submitQuiz} value="Submit" />
        </div>
        // </form>
    );
}

export default Main;
