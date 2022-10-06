import React from "react"
import styles from "../Style/navbar.module.css"
import WhyCCS from "./WhyCCS"
import Carousel from "./Carousel"


function Navbar() {
    return (
        
        <nav>
    
        <div className= {styles.navbarContainer}>
        <div className={styles.navLogo} >
        <a href="https://www.ccstiet.com/">Learn . Code . Collaborate .</a>
        
        
        </div>
        
        <div className={styles.mobileIcon}>
        
    </div>
        <div className={styles.navMenu}>
        
        <li className={styles.navItem}>
        <div className={styles.navLinks}><a href="#whyccsid">Why CCS?</a></div>
        
        
        </li>
        <li className={styles.navItem}>
        <div className={styles.navLinks}><a href="#carouselid">Gallery</a></div>
        
        
        </li>
        <nav className={styles.navBtn}>
        <a href="#">Sign Up!</a>
        
        
        </nav></div>
        
        </div>
        
        
       
        
        
        </nav>
    )
}

export default Navbar