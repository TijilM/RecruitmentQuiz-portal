import React from "react"
import styles from "../Style/navbar.module.css"
import WhyCCS from "./WhyCCS"
import Carousel from "./Carousel"
import { TypeAnimation } from 'react-type-animation';


function Navbar() {
    return (
        
        <nav>
    
        <div className= {styles.navbarContainer}>
        <div className={styles.container} ><TypeAnimation
        sequence={[
          'Learn.',
          1000, 
          'Code.', 
          2000, 
          'Collaborate.',
          
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2vw' }}
      />
       
        
        
        </div>
        
        <div className={styles.mobileIcon}>
        
    </div>
        <div className={styles.navMenu}>
        
        <li>
        <div className={styles.navLinks}><a href="#whyccsid">Why CCS?</a></div>
        
        
        </li>
        <li>
        <div className={styles.navLinks}><a href="#carouselid">Gallery</a></div>
        
        
        </li>
       </div>
        
        </div>
        
        
       
        
        
        </nav>
    )
}

export default Navbar

