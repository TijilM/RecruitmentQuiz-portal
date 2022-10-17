import styles from "../Style/test.module.css"
import React from "react";
import axios from "axios";
const baseURL = "https://recruitment-api.ccstiet.com/api/v1/users/profile";
const token = localStorage.getItem("jwt");
console.log(token)
function LeftAside(){
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        
        axios.get(baseURL, {headers:{
            "Authorization" : `Bearer ${token}`
            
          }}).then((response) => {
            setPost(response.data);
          console.log(response.data);
        });
      }, []);if (!post) return null;

    return (
        <div>
            <img src={require("../Assets/Traced-Logo.png")} alt="ccsLogo" className={styles.testLogo} />
            <hr className={styles.testLeftAsideLine}/>
            <div className={styles.testUser}>
                <div className={styles.testName}>{post.data.name}</div>
                <div className={styles.testEmail}>{post.data.email}</div>
            </div>

            <div className={styles.testLeftAsideBottom}>
                <div className={styles.testContact}>
                    <div className={styles.testName}>CONTACT US</div>
                    <div className={styles.testEmail}>TECHSUPPORT@GMAIL.COM</div>
                </div>
                <hr className={styles.testLeftAsideLine}/>
                <button className={styles.testLogout}>LOGOUT</button>
            </div>
        </div>
    )
}

export default LeftAside