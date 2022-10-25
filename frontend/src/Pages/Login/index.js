// import SignupForm   from "./Components/Signup";
import styles from "./Style/login.module.css";
import LeftContainer from "./Components/LeftContainer";
import RightContainer from "./Components/RightContainer";

function Login() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
}

export default Login;
