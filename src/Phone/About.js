import photo from "../resources/main-photo.png"
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faCloud, faCalculator, faPlay } from "@fortawesome/free-solid-svg-icons"
import '../Css/phone.css'
import { Link } from "react-router-dom"

function About(){


    return (
        <>
        <img src={photo} alt="Logo" width="308" len="400"/>
        {
            <>
                <div className="name">Görkem ARPACI</div>
                <div className="title">IOS Developer</div>
                <div>
                    <h2 className="subTitle my-[5px]">About</h2>
                    <p className="context">I am a IOS developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>

                    <h2 className="subTitle my-[5px]">Interest</h2>
                    <p className="context">Little gymrat. Music scholar. Reader. Internet fanatic.</p>

                    <h2 className="subTitle my-[5px]">Projects</h2>
                    <div className="projects">
                        <Link to="/todo">
                            <FontAwesomeIcon icon={faBars} className="item_project"/>
                        </Link>
                        
                        <Link to="/weather">
                            <FontAwesomeIcon icon={faCloud} className="item_project"/>
                        </Link>
                        
                        <FontAwesomeIcon 
                        icon={faCalculator} 
                        className="item_project" 
                        onClick={() => window.location.href = "https://github.com/Corki19/JS-Calculator/tree/master"}
                        style={{cursor: "pointer"}}
                        />
                        

                        <Link to= "/video">
                            <FontAwesomeIcon icon={faPlay} className="item_project"/>
                        </Link>
                    </div>
                </div>
            </>
        }
        </>
    )
}

export default About;