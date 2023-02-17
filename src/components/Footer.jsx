import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import '../App.css'

const Footer = () => {
    return(
        <div>
            <div className="footer-icons">
            <IconContext.Provider value={{size: 44}}>
                <a href="https://www.linkedin.com/in/alpagu-ilgar-saka-196b4a230"><BsLinkedin style={{ color: "#5c82d1" }} /></a>
                <a href="https://github.com/narniaeagle"><BsGithub style={{color: '#b53198'}}/></a>
            </IconContext.Provider>
            </div>
            <div>
                <h5>&copy;2023 alpagusaka.com</h5>
            </div>
        </div>
    )
}

export default Footer