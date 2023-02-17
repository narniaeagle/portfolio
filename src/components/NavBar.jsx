import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="nav-top">
            <span className="nav-top-items"><Link to="./Projects">Projects</Link></span>
            <span className="nav-top-items"><Link to="/">Home</Link></span>
            <span className="nav-top-items"><Link to="./About"><button>About</button></Link></span>

        </div>
    )
}

export default NavBar