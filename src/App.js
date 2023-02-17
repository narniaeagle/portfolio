import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="About" element={<About />}/>
        <Route path="Projects" element={<Projects />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
