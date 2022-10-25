import styles from "./Style/loginredirect.module.css";

function LoginRedirect() {
    return (
        <div>
            {/* <div className={styles.ovalcont}>
                <div className={styles.oval}></div>
            </div> */}
            <div className={styles.ovaltext}>
                Please login back at your slot time
                <br />
                All the best!
            </div>
        </div>
    );
}

export default LoginRedirect;
