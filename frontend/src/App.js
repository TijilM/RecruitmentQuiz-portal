import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Test from "./Pages/Test"
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login"
import LoginRedirect from "./Pages/LoginRedirect"
import Home from "./Pages/Home";
import Instructions from "./Pages/Instructions";
import Submitted from "./Pages/Submitted"
import { Navigate } from "react-router-dom"

function App() {
  let user = localStorage.getItem("user")

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginRedirect/>}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
          {/* {user && (<Route path="/test" element={<Test />}></Route>)} */}
          {/* <Route path="/submitted" element={<Submitted />}></Route> */}
          {/* <redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
