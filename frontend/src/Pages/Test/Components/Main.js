import React, { useEffect, useState, useMemo } from "react";
import Question from "./Question";
import styles from "../Style/test.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";


function Main() {
    
    const navigate = useNavigate();


    // const [questions, setQuestions] = useState([])
    const [questionsElem, setQuestionsElem] = useState([])
    const [answers, setAnswers] = useState({})
    const [confirmSubmit, setConfirmSubmit] = useState([])  
    

    

    


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
            // const res = await axios.get("http://127.0.0.1:8000/api/v1/questions/getQuestions", config);

            const questions = res.data.data.questions;


            setQuestionsElem(questions.map((ques, index) => {
                
                return (
                    <Question
                        question = {ques}
                        index = {index}
                        key = {ques._id}
                        optionClicked = {optionClicked}
                    />
                )
                
                
            }))
            


            const initialAnswers = {};

            questions.forEach((ques) => {
                initialAnswers[ques._id] = "unanswered";
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
        setButton(
            <button type="submit" className={styles.submitBtn} disabled>
              <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
            </button>
        );
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
        // const res = await axios.post("http://127.0.0.1:8000/api/v1/answers/checkAnswers", data, config)

        if(res.data.status == "success"){
            setButton(
                <button type="submit" className={styles.submitBtn} disabled>
                    <div>Submitted</div>
                </button>
            );
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            localStorage.removeItem("answers")
            localStorage.removeItem("timePast")
            document.exitFullscreen()
            navigate("/submitted")
        }

    }

    const [button, setButton] = useState(
        <button type="submit" onClick={submitQuiz} className={styles.submitBtn}>
        
            <div>Final Submit</div>
        </button>
    );
    useEffect(() => {
        setConfirmSubmit(() => {
                
            return (
               <div>
                    {Cbutton}
                </div>
    
            )
            
            
        })
    }, []);
    const submitFunc = () => {
        setConfirmSubmit(() => {

            return (
                <div>
                    <h3>Are you sure you want to submit?</h3>
                   {button}
                </div>

            )


        })
    }

    const [Cbutton, setCButton] = useState(
        <button type="submit" onClick={submitFunc} className={styles.submitBtn}>
        <div>{confirmSubmit}</div>
            <div>Submit</div>
        </button>
    );

    




    return (
        <div>
            <div className={styles.boxcontainer}>
                <div>
                    <h1 className={styles.testHeading}>Recruitment Quiz</h1>
                    {questionsElem}
                </div>
            </div>

            {confirmSubmit}
        </div>
    );
}

export default Main;
