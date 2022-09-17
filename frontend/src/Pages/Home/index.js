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
        <div className="home-complete-page">
            <div className="top-bg-section">
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
                <div className="wrap">
                    <a href="/signup" className="responsive home-button">Register to get a free course</a>
                </div>
            </div>


            <div className="bottom-bg-section">
                {/* <div >
                    <div className="imgcontainer" id="bgwhy"> <img className="responsive" src={artboard} alt="" width="550" height="300" /></div><br />
                </div> */}
                <div className="why-ccs-section">
                    <h1 className="why-ccs-heading">Why CCS?</h1>
                    <ul className="why-ccs-list">
                        <li>
                            <h3>Regular Meet-ups</h3>
                            <div>We, at CCS, hold regular meet-ups to introduce the members to various fields of computer science and technology.</div>
                        </li>
                        <li>
                            <h3>Skill-set Development</h3>
                            <div>The members of the society collaborate with each other to develop and polish their skill-sets.</div>
                        </li>
                        <li>
                            <h3>Designing Opportunities</h3>
                            <div>CCS provides various opportinities to the designing posters, flexes, videos, etc for the society.</div>
                        </li>
                        <li>
                            <h3>Project Opportunities</h3>
                            <div>CCS members get the opportunity to work on multiple tech-based projects in teams. This also helps in developing their soft skills.</div>
                        </li>
                        <li>
                            <h3>Strong Alumni Network</h3>
                            <div>CCS also has a very strong network of its alumni who constantly guide the members of the society and share their experiences.</div>
                        </li>
                        <li>
                            <h3>Exposure</h3>
                            <div>The society provides good exposure by providing adequate opportunities, guidance and examples to help its members bloom.</div>
                        </li>
                    </ul>
                </div>
                <br />
                <div className="responsive carousel"></div>
                
                <footer className="responsive">
                    <div  className=" rounded-social-buttons">
                        <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a className="social-button linkedin" href="https://www.linkedin.com/company/ccs-tiet/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a className="social-button youtube" href="https://youtube.com/channel/UCc-F6rlsDdHAKfSiPJEnDLg" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a className="social-button instagram" href="http://instagram.com/ccs_tiet?utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div><br /><br />
                </footer>
            </div>
        </div>
    )
}

export default Home