import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faYoutube} from "@fortawesome/free-brands-svg-icons"
import {faInstagram} from "@fortawesome/free-brands-svg-icons"


function Footer(){
    return (
        <div  className=" rounded-social-buttons">
            <a className="social-button facebook" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
            <a className="social-button linkedin" href="https://www.linkedin.com/company/ccs-tiet/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a className="social-button youtube" href="https://youtube.com/channel/UCc-F6rlsDdHAKfSiPJEnDLg" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="social-button instagram" href="http://instagram.com/ccs_tiet?utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
    )
}

export default Footer