import LeftAside from "./Components/LeftAside"
import Main from "./Components/Main"
import RightAside from "./Components/RightAside"
import styles from "./Style/test.module.css"

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