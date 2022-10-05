import styles from "../Style/test.module.css"

function LeftAside(){
    return (
        <div>
            <img src={require("../Assets/Traced-Logo.png")} alt="ccsLogo" className={styles.testLogo} />
            <hr className={styles.testLeftAsideLine}/>
            <div className={styles.testUser}>
                <div className={styles.testName}>ADITYA PARMAR</div>
                <div className={styles.testEmail}>ADITYAPARMAR@GMAIL.COM</div>
            </div>

            <div className={styles.testLeftAdieBottom}>
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