import React from "react";
import styles from "../Style/navbar.module.css";
import { TypeAnimation } from "react-type-animation";

function Navbar() {
    return (
        <nav>
            <div className={styles.navbarContainer}>
                <div className={styles.navBtn}>
                    <TypeAnimation
                        sequence={["Learn.", 1000, "Code.", 2000, "Collaborate."]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: "2vw" }}
                    />
                </div>

                <div className={styles.mobileIcon}></div>
                <div className={styles.navMenu}>
                    {/* <BrowserRouter>
                        <div>
                          <Link to="#whyccsid" className={styles.navLinks}>Whyccs?</Link>
                        </div>
                    </BrowserRouter> */}
                  
                    
                    <div>
                        <a className={styles.navLinks} href="#whyccsid">Whyccs?</a>
                    </div>
                    <div>
                        <a className={styles.navLinks} href="#carouselid">Gallery</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
