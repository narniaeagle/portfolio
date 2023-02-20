import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="nav-top">
            <span className="nav-top-items"><Link to="./Projects"><button className="btn1">PROJECTS</button></Link></span>
            <span className="nav-top-items"><Link to="/"><button className="btn1">HOME</button></Link></span>
            <span className="nav-top-items"><Link to="./About"><button className="btn1">ABOUT</button></Link></span>

        </div>
    )
}

export default NavBar