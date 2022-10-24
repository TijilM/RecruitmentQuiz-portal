import React, { useEffect, useState, useMemo } from "react";
import Question from "./Question";
import styles from "../Style/question.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
    const navigate = useNavigate();


    // const [questions, setQuestions] = useState([])
    const [questionsElem, setQuestionsElem] = useState([])
    const [answers, setAnswers] = useState({})


    const optionClicked = (e) => {
        setAnswers(prevAns => (
            {...prevAns, [e.target.name]: parseInt(e.target.value)}
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

        console.log("data", data)

        const res = await axios.post("https://recruitment-api.ccstiet.com/api/v1/answers/checkAnswers", data, config)

        if(res.data.status == "success"){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            localStorage.removeItem("answers")
            navigate("/submitted")
        }

    }




    return (
        <div>
            <div className={styles.boxcontainer}>
                <div>
                    <h1>Recruitment Quiz</h1>
                    {questionsElem}
                </div>
            </div>

            <input type="button" onClick={submitQuiz} value="Submit" />
        </div>
    );
}

export default Main;
