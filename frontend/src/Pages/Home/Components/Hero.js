import styles from "../Style/hero.module.css"
import bgImg from "../Assets/Landing.png"
import logo from "../Assets/black-logo.png"



function Hero() {
  return (
    
    <div className={styles.heroContainer}>
      <img src={bgImg} alt="bg-image" className={styles.heroBg}/>
      <img src={logo} alt="ccs-logo" className={styles.logo}/>
    
      <div className={styles.buttons}> 
        <input type="button" value="Login" className={`${styles.button} ${styles.loginButton}`}/>
        <input type="button" value="Register" className={`${styles.button} ${styles.registerButton}`}/>
      </div>

    </div>
  )
}

export default Hero