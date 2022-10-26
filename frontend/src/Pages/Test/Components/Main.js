import React, { useEffect, useState, useMemo } from "react";
import Question from "./Question";
import styles from "../Style/test.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import $ from "jquery";



function Main() {
    
    const navigate = useNavigate();


    // const [questions, setQuestions] = useState([])
    const [questionsElem, setQuestionsElem] = useState([])
    const [answers, setAnswers] = useState({})
    const [cheatAlert, setCheatAlert] = useState([])     
    const [disqualified, setDisqualified] = useState(0)


    $(window).blur(function() {
            if(!document.hasFocus()) {
                setCheatAlert(() => {
                    
                    return (
                       <div className={styles.cheatAlert}>
                            <h3>Final warning!</h3>
                        </div>
    
                    )
                    
                    
                })
                setDisqualified(disqualified + 1);
                
            }
        
    });
useEffect(() => {
    if(disqualified > 1) {
        navigate("/disqualified")
    }

}, [disqualified])


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
            setCheatAlert(() => {
                
                return (
                   <div className={styles.cheatAlert}>
                        <h3>Do not refresh the page or close the tab. Doing so will result in disqualification.</h3>
                    </div>

                )
                
                
            })


            const initialAnswers = {};

            questions.forEach((ques) => {
                initialAnswers[ques._id] = "unanswered";
            })
    
            setAnswers(initialAnswers)
        }

        fetchQuestions()


        
    }, []);

    useEffect(() => {
        console.log("cheat alert")
    }, [cheatAlert])

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
        // const res = await axios.post("http://127.0.0.1:8000/api/v1/answers/checkAnswers", data, config)

        if(res.data.status == "success"){
            localStorage.removeItem("jwt")
            localStorage.removeItem("user")
            localStorage.removeItem("answers")
            localStorage.removeItem("timePast")
            document.exitFullscreen()
            navigate("/submitted")
        }

    }




    return (
        <div>
            <div className={styles.boxcontainer}>
                <div>
                    <h1 className={styles.testHeading}>Recruitment Quiz</h1><div>{cheatAlert}</div>
                    {questionsElem}
                </div>
            </div>

            <input type="button" onClick={submitQuiz} value="Submit" className={styles.submitBtn}/>
        </div>
    );
}

export default Main;
