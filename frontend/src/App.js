import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useState } from "react";
import Test from "./Pages/Test"
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login"
import LoginRedirect from "./Pages/LoginRedirect"
import Home from "./Pages/Home";
import Disqualified from "./Pages/Disqualified";
import Instructions from "./Pages/Instructions";
import Submitted from "./Pages/Submitted"
import { Navigate } from "react-router-dom"
import {slot1_time, slot2_time} from "./config.js"

function App() {
  // const [user, setUser] = useState(localStorage.getItem("user"));
  const user = JSON.parse(localStorage.getItem("user"));
  const [count, setCount] = useState(0);

  const updateState = () => {
    setCount(prevCount => prevCount+1)
  }

  const checkDeadline = () => {
    // user.data.user.shift==1?(Date.now()-Date.parse("October, 28, 2022 01:00:00")>-2000?true:false):(Date.now()-Date.parse("October, 28, 2022 21:30:00")>-2000?true:false)
    // console.log(user.data.user.shift)
    if(user.data.user.shift == 1){
      if(Date.now() - Date.parse(slot1_time) > -2000){
        // console.log("true")
        return true
      }else {
        // console.log("false")
        return false
      }
    }else {
      if(Date.now() - Date.parse(slot2_time) > -2000){
        // console.log("true")
        return true
      }else {
        // console.log("false")
        return false
      }
    }
  }

  // console.log("re-rendered")
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/instructions" element={<Instructions updateState={updateState} />}></Route>
          {
            user 
            && checkDeadline() 
            && (<Route path="/test" element={<Test />}></Route>)
          }
          <Route path="/submitted" element={<Submitted />}></Route>
          <Route path="/disqualified" element={<Disqualified />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
