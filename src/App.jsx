import './styles/main.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ScrollToTop from './components/utils/scrool.jsx'

import Navbar from './components/nav/Navbar.jsx'

import Footer from './components/footer/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contacts from './pages/Contact.jsx'
import Project from './pages/Project.jsx'

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
          <Navbar />
            <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/Contacts" element={<Contacts/>}/>
              <Route path="/Project/:id" element={<Project/>}/>

            </Routes>

          <Footer/>

      </Router>

    </>
  )
}
