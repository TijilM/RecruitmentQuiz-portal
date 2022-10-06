import styles from "../Style/rightContainer.module.css"
import img from "../Assets/login.svg";

function RightContainer() {
  return (
    <div className={styles.rightContainer}>
      <div className={styles.content}>
        <h3>Register Now!</h3>
        <p>Get a free course and start your amazing journey towards coding</p>
      </div>
      <img
        src={img}
        alt="floating vector"
        className={styles.vectorImage}
      />
    </div>
  )
}

export default RightContainer