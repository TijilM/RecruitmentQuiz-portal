import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Test from "./Pages/Test"
import Signup from "./Pages/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Test />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
