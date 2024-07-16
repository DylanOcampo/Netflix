import { useState, useEffect } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from '../assets/imgs/Logonetflix.png';
import navIcon1 from '../assets/imgs/person_icon.svg';
import navIcon2 from '../assets/imgs/search_icon.svg';


import { useNavigate } from "react-router-dom";

export const NavBar = ({baseState}) => {


const navigate = useNavigate()

    const gotToNewPage=()=>{
        navigate("/profiles");
    }

  const [activeLink, setActiveLink] = useState(baseState);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
          <Navbar.Brand href="/home" style={{alignItems: "left", paddingLeft: "10px"}}>
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
            <Nav >
              <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="/series" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('series')}>Series</Nav.Link>
              <Nav.Link href="/movies" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('movies')}>Movies</Nav.Link>
            </Nav>
            
            <span className="navbar-text" >
              <div className="social-icon" style={{paddingRight: "10px"}}>
                <Button><img src={navIcon2} alt="" style={{width: "40px"}}/></Button>
                <Button onClick={() => gotToNewPage()}><img src={navIcon1} alt="" style={{width: "40px"}}/></Button>
                
              </div>

            </span>

      </Navbar>


  )
}
