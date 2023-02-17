import Home from './Home'
import About from './About'
import Projects from './Projects'
import { Route, Routes , Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="nav-top">
            <span className="nav-top-items"><Link to="./Projects">Projects</Link></span>
            <span className="nav-top-items"><Link to="/">Home</Link></span>
            <span className="nav-top-items"><Link to="./About"><button>About</button></Link></span>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="About" element={<About />}/>
                <Route path="Projects" element={<Projects />}/>
            </Routes>
        </div>
    )
}

export default NavBar