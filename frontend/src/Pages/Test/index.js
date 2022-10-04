import LeftAside from "./Components/LeftAside"
import Main from "./Components/Main"
import RightAside from "./Components/RightAside"
import styles from "./Style/test.module.css"

function Test(){
    return (
        <div className="test-page">
            <div className="test-left-aside">
                <LeftAside />
            </div>
            <div className="test-main">
                <Main />
            </div>
            <div className="test-right-aside">
                <RightAside />
            </div>
        </div>
    )
}   

export default Test