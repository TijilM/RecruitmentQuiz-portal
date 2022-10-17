import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Test from "./Pages/Test"
import Signup from "./Pages/SignUp";
// import Login from "./Pages/Login"
import LoginRedirect from "./Pages/LoginRedirect"
import Home from "./Pages/Home";
import Instructions from "./Pages/Instructions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginRedirect />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/instructions" element={<Instructions />}></Route>
         // <Route path="/test" element={<Test />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
