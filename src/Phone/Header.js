import '../Css/header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faSwift } from "@fortawesome/free-brands-svg-icons"

function Header() {

    return (
        <header>
            <div className="social-media">
                <div
                    className="item"
                    onClick={() => window.location.href = "https://github.com/Corki19"}
                    style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faGithub} className="fa"/>
                </div>

                <div
                    className="item"
                    onClick={() => window.location.href = "https://www.linkedin.com/in/gorkem-arpaci/"}
                    style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faLinkedin} className="fa"/>
                </div>

                <div
                    className="item mr-[10px]"
                    onClick={() => window.location.href = "https://www.fiverr.com/gorkemarpac19?up_rollout=true"}
                    style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={faSwift} className="fa"/>
                </div>
            </ div>
        </header>
    )
}


export default Header