import logo from "../Assets/Traced-Logo-white.png"

function Hero() {
  return (
    <div className="top-bg-section">
        {/* <video autoPlay muted loop id="myVideo">
            <source src={ccsVideo} type="video/mp4" />
        </video> */}
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
  )
}

export default Hero