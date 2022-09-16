function LeftAside(){
    return (
        <div>
            <img src={require("../Assets/Traced-Logo.png")} alt="ccsLogo" className="test-logo"/>
            <hr className="test-leftAside-line"/>
            <div className="test-user">
                <div className="test-name">ADITYA PARMAR</div>
                <div className="test-email">ADITYAPARMAR@GMAIL.COM</div>
            </div>

            <div className="test-leftAside-bottom">
                <div className="test-contact">
                    <div className="test-name">CONTACT US</div>
                    <div className="test-email">TECHSUPPORT@GMAIL.COM</div>
                </div>
                <hr className="test-leftAside-line"/>
                <button className="test-logout">LOGOUT</button>
            </div>
        </div>
    )
}

export default LeftAside