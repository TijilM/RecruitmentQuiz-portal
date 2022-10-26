import styles from "../Style/looks.module.css";
import Landing from "../Assets/Landing.png";
import Timer from "./Timer";
function Looks({updateState}) {
    return (
        <div className={styles.lookscontainer} id="whyccsid">
            <div className={styles.contentSection}>
                <div className={styles.instructions}>
                    <div className={styles.bg}>
                        <div className={styles.imageItem}>
                            <img src={Landing} alt="headerimage" className={styles.whyccsImage} />
                            <div className={styles.heading}>
                            <h1>Instructions</h1>
                        </div>
                        </div>
                        
                        <div className={styles.sub}>
                            <h2>
                                Please make note of the following points:<br /><br />
                                * Please Login from a Laptop for the quiz<br/>
                                * Do not Login from more than one device<br />
                                * Do not switch tabs as it may result in termination of your exam<br />
                                * The quiz will consist of MCQ questions<br />
                                * There will be only one correct option per question<br />
                                * The quiz duration will be 15 mins<br />
                                * It is mandatory to switch on the camera during the quiz<br/>
                                * Any induvidual found indulging in unfair means would be disqualified and wont be eligible 
                                  for the recruitment process this year and the next.
                            </h2>
                            <br/>
                            
                        </div>
                        <div className={styles.container}>
                            <h1>Quiz Starts in :</h1>
                            <Timer updateState={updateState}/>
                        </div>
                        <div className={styles.heading1}>
                            <h1>Best of Luck!</h1>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Looks