import ccsVideo from "./Assets/video.mp4"

import img1 from "./Assets/img1.jpg"
import img2 from "./Assets/img2.jpg"
import img3 from "./Assets/img3.jpg"
import img4 from "./Assets/img4.jpg"
import artboard from "./Assets/23Artboard 1.png"
import logo from "./Assets/Traced-Logo-white.png"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"

import "./Style/styles.css"

function Home(){
    return (
        <div>
            <video autoPlay muted loop id="myVideo">
                <source src={ccsVideo} type="video/mp4" />
            </video>
            <nav style={{fontSize:"2vw"}} >
                <ul className="nav-list">
                    <li className="nav-items"><a href="/"><i className="fa-solid fa-terminal"></i></a></li>
                    <li className="nav-items"><a href="/signup" style={{fontSize:"2vw"}} className="nav-btn">Sign Up</a></li>
                </ul>
	        </nav>
            <div ><br /></div>
            <div className="imgcontainer"> <img className="responsive" src={logo} alt="" width="550" height="300" /></div><br /><br />
            <h2 className="text" style={{fontSize:"2vw"}}>LEARN. CODE. COLLABORATE.</h2>

            <div >
                <div className="imgcontainer" id="bgwhy"> <img className="responsive" src={artboard} alt="" width="550" height="300" /></div><br />
            </div>

            <br />
            <div className="responsive carousel"></div>
            <div className="wrap">
                <a href="" className="responsive home-button">Sign Up!</a>
            </div>


            <footer className="responsive">
                <div  className=" rounded-social-buttons">
                    <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="social-button linkedin" href="https://www.linkedin.com/company/ccs-tiet/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="social-button youtube" href="https://youtube.com/channel/UCc-F6rlsDdHAKfSiPJEnDLg" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a className="social-button instagram" href="http://instagram.com/ccs_tiet?utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                </div><br /><br />
            </footer>
        </div>
    )
}

export default Home