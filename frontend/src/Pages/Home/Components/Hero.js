import styles from "../Style/hero.module.css"
import heroImg from "../Assets/heroImg.svg"
import logo from "../Assets/white-logo.png"




function Hero() {
  return (
    
    <div className={styles.heroContainer}>
      <img src={heroImg} alt="hero-bg-img" className={styles.heroImg}/>
      <img src={logo} alt="ccs-logo" className={styles.logo}/>
    
      <div className={styles.buttons}> 
          <a href="/signup"><input type="button" value="Register for test" className={`${styles.button} ${styles.registerButton}`}/></a>
          <a href="https://renaissance.programmingpathshala.com/crack-coding-interviews"><input type="button" value="Sign Up for Course" className={`${styles.button} ${styles.loginButton}`}/></a>
      </div>
    
    </div>
  )
}

export default Hero