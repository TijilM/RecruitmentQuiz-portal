import LeftAside from "./Components/LeftAside"
import Main from "./Components/Main"
import RightAside from "./Components/RightAside"
import styles from "./Style/test.module.css"
import { useEffect,useState } from 'react';
import $ from 'jquery';


function Test(){
    
const [cheatStrikes, setCheatStrikes] = useState(0);

$(window).blur(function() {
   // alert("Warning! You are being monitored \n cheat strikes="+{cheatStrikes}+"/3");
   // console.log({cheatStrikes});
  //  setCheatStrikes(cheatStrikes+1);
  alert("Warning! You are being monitored ");


});

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