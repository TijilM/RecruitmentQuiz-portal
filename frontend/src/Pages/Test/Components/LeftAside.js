import styles from "../Style/test.module.css"
import React, { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate, redirect } from "react-router-dom";
import $ from "jquery";

// const baseURL = "https://recruitment-api.ccstiet.com/api/v1/users/profile";



// console.log(User.data.user)
function LeftAside(){
    const [cheatAlert, setCheatAlert] = useState([])     
    const [disqualified, setDisqualified] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        setCheatAlert(() => {
                
            return (
               <div className={styles.cheatAlert}>
                    <h3>Do not refresh the page or close the tab. Doing so will result in disqualification.</h3>
                </div>
    
            )
            
            
        })
    }, []);
    

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
    


    const localUser = localStorage.getItem("user")
    // if(!localUser){
    //     console.log("redirecting")
    //     navigate("/login")
    // }
    const User = JSON.parse(localUser);
    // const [post, setPost] = React.useState(null);
    // React.useEffect(() => {
        
    //     axios.get(baseURL, {headers:{
    //         "Authorization" : `Bearer ${token}`
            
    //       }}).then((response) => {
    //         setPost(response.data);
    //       console.log(response.data);
    //     });
    //   }, []);if (!post) return null;

    const logout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("jwt")
        localStorage.remoteItem("answers")

        navigate("/")
    }

    return (
        <div>
            <img src={require("../Assets/Traced-Logo.png")} alt="ccsLogo" className={styles.testLogo} />
            <hr className={styles.testLeftAsideLine}/>
            <div className={styles.testUser}>
                {/* <div className={styles.testName}>Aditya Parmar</div>
                <div className={styles.testEmail}>aditya@gmail.com</div> */}
                <div className={styles.testName}>{User.data.user.name}</div>
                <div className={styles.testEmail}>{User.data.user.email}</div>
            </div>
            <div>{cheatAlert}</div>

            <div className={styles.testLeftAsideBottom}>
                <div className={styles.testContact}>
                    <div className={styles.testName}>CONTACT US</div>
                    <div className={styles.testEmail}>ccs@thapar.edu</div>
                </div>
                <hr className={styles.testLeftAsideLine}/>
                <button className={styles.testLogout} onClick={logout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default LeftAside