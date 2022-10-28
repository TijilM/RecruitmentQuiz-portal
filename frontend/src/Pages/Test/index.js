import LeftAside from "./Components/LeftAside"
import Main from "./Components/Main"
import RightAside from "./Components/RightAside"
import styles from "./Style/test.module.css"
import { useEffect,useState } from 'react';
import axios from "axios";
import $ from 'jquery';
// import { useNavigate } from "react-router-dom";

function Test(){
    return (
        <div className={styles.testPage}>
            <div className={styles.testLeftAside}>
                <LeftAside />
            </div>
            <div className={styles.testMain}>
                <Main />
            </div>
            <div className={styles.testRightAside}>
                <RightAside />
            </div>
        </div>
    )
}   

export default Test