import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from '../assets/imgs/Logonetflix.png';
import navIcon1 from '../assets/imgs/person_icon.svg';
import navIcon2 from '../assets/imgs/search_icon.svg';
import navIcon3 from '../assets/imgs/close.png';

import React, { useContext } from 'react';
import { ElementContext2 } from '../Context/SearchContext';

import Form from 'react-bootstrap/Form';

import { useNavigate } from "react-router-dom";

export const NavBar = ({baseState, isSearchActive}) => {

const navigate = useNavigate()

    const gotToNewPage=()=>{
        navigate("/profiles");
    }

    const goToHome=()=>{
        navigate("/home");
    }

    const { changeValue } = useContext(ElementContext2);

    const gotToSearch=()=>{
      if(isSearchActive){
        changeValue(query)
      }else{
        changeValue("")
        navigate("/search");
      }
        
    }

    const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      changeValue(query);
    }
  };

  const [activeLink, setActiveLink] = useState(baseState);
  const [scrolled, setScrolled] = useState(false);

  const [query, setQuery] = useState("");

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
            
            <span >
              <div  style={{paddingRight: "10px", display: "flex"}}>
                {isSearchActive ? <div style={{paddingTop: "10px"}}><Form.Control type="text" value={query} onKeyPress={handleKeyPress} onChange={e =>  setQuery(e.target.value)
    
                  

                } className="SearchInput" /> 
                <button onClick={() => goToHome()} className="clearButton"><img src={navIcon3} alt="" style={{width: "20px", position: "relative", left: "-30px", bottom: "-5px"}}/></button>
                
                </div>: null}
                <button onClick={() => gotToSearch()} className="clearButton"><img src={navIcon2} alt="" style={{width: "40px"}}/></button>
                <button onClick={() => gotToNewPage()} className="clearButton"><img src={navIcon1} alt="" style={{width: "40px"}}/></button>
                
              </div>

            </span>

            

      </Navbar>


  )
}
