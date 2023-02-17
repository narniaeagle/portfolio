import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="nav-top">
            <span className="nav-top-items"><Link to="./Projects"><button className="btn1">Projects</button></Link></span>
            <span className="nav-top-items"><Link to="/"><button className="btn1">Home</button></Link></span>
            <span className="nav-top-items"><Link to="./About"><button className="btn1">About</button></Link></span>

        </div>
    )
}

export default NavBar