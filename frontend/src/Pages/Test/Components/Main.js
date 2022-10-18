import React, { useEffect, useState } from "react";
import Question from "./Question";
import styles from "../Style/question.module.css";
import axios from "axios";

function Main() {

    const [questionsElem, setQuestionsElem] = useState([])
    const [answers, setAnswers] = useState([])
    // let questionsElem


    const optionClicked = (e) => {
        setAnswers(prevAns => {
            for(let ans of prevAns){
                // console.log(e.target.name, ans[0], e.target.name == ans[0])
                if(e.target.name == ans[0]){
                    ans[1] = parseInt(e.target.value)
                }
            }

            return prevAns
        })
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
            console.log(res);
            const questions = res.data.data.questions
            // setQuestions(res.data.data.questions)
            // console.log(questions)


            // for(const ques of questions){
                
            // }


            setQuestionsElem(questions.map((ques, index) => {
                // console.log(ques[0].question)

                setAnswers(prevAns => {
                    return ([...prevAns, [ques[0]._id, "unanswered"]])
                })

                return (
                    <Question
                        question = {ques[0]}
                        index = {index}
                        key = {ques[0]._id}
                        optionClicked = {optionClicked}
                    />
                )
                
                
            }))

            console.log(questionsElem)


        }

        fetchQuestions()


        
        

    }, []);

    const submitQuiz = async () => {
        console.log(answers)

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

        const data = {
            "questionIdsAndAnswers": answers,
        }

        const res = await axios.post("https://recruitment-api.ccstiet.com/api/v1/answers/checkAnswers", data, config)
    }


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
