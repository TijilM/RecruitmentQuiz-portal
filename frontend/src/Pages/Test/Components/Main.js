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

            const res = await axios.get("https://recruitment-api.ccstiet.com/api/v1/questions/getQuestions", config);
            console.log(res);
            const questions = res.data.data.questions
            // setQuestions(res.data.data.questions)
            // console.log(questions)
            setQuestionsElem(questions.map((ques, index) => {
                // console.log(ques[0].question)
                return (
                    <Question
                        question = {ques[0]}
                        index = {index}
                        key = {ques[0]._id}
                    />
                )
                
                
            }))

            console.log(questionsElem)


        }

        fetchQuestions()


        
        

    }, []);

    const submitQuiz = async () => {

    }



    //save answrs to local storage

const [answers, setAnswers] = useState(() => {
    return JSON.parse(localStorage.getItem("user_answers"))
    
  });
  
  useEffect(() => {
    const getAns = JSON.parse(localStorage.getItem("user_answers"));
    if (getAns) setAnswers(getAns);
    console.log(getAns);
  }, []);


useEffect(() => {
    
    const selected = document.querySelectorAll("input[type=radio]:checked");
    
    const answers = [...selected].map((opt) => opt.name+opt.id);
   window.localStorage.setItem("user_answers", JSON.stringify(answers));//update selected opt in ls
   
}, [answers]);

  

    // setInterval(() => {
      
    //     const markhistory = JSON.parse(localStorage.getItem("user_answers"));
    //     if (markhistory!=null) {
    //         console.log(markhistory);
    //         setAnswers(markhistory.data);
    //     for(var i=0;i<markhistory.length;i++){
            
    //         //console.log(markhistory[i].slice(0,markhistory.length-1));
    //        document.getElementsByName(markhistory[i].slice(0,markhistory.length-1)).checked = true;
    //     }
    // };
    // }, 1000)
  

    return (
        // <form>
        <div>

            <div onChange={setAnswers}>
                <div onChange={setAnswers}>
                    <h1></h1>
                    {questionsElem}
                    
                </div>
            </div>

            {/* <Question qid="2" /> */}
            

            <input type="button" onClick={submitQuiz}/>
        </div>
        // </form>
    );
}

export default Main;
