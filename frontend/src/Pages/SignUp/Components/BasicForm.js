import React, { useState } from "react";
import axios from "axios";
import logo from '../Assets/logo.png';
const url = "";
const BasicForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const [allentry, setAllentry] = useState([]);

    const submitForm = async (e) => {
        e.preventDefault();
        if (email && password && name) {
            // const newEntry = { id: new Date.getTime().toString(), email, password,name };

            // setAllentry([...allentry, newEntry]);
            // console.log(allentry);

            // setEmail("")
            // setName("")
            // setPassword("")
            try {
                const resp = await axios.post(url, { name: name, email: email, password: password });
                console.log(resp.data);
            } catch (error) {
                console.log(error);
            }

            console.log(name, email)
        }
        else {
            alert("Please fill in the data")
        }
    }
    return (
        <>
            <div className="container">
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div className="form">
                    <div >
                        <img src={logo} alt="Logo" className="signup-logo"/>
                    </div>
                    <div className="right">
                        <form action="" onSubmit={submitForm}>
                            <h3>RECRUITMENT QUIZ</h3>
                            <h4>LOGIN NOW!</h4>
                            {/* <hr/> */}
                            <div className="inside">
                                <label htmlFor="name" >Name</label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="inside">
                                <label htmlFor="email" >Email</label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="inside">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button typ="submit" className="button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BasicForm;