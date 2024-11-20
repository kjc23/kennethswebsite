import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Button } from "./Button";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setShowNavbar(false);
        } else {
          // Scrolling up
          setShowNavbar(true);
        }
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    return (
      <>
          <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
              <div className="navbar-container">
                {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                  ABB <FontAwesomeIcon icon={faDumbbell} />
                </Link> */}
                <div className="menu-icon" onClick={handleClick}>
                  <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                      <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                          Home
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/bible' className="nav-links" onClick={closeMobileMenu}>
                          Bible
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/music' className="nav-links" onClick={closeMobileMenu}>
                          Music
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/recipes' className="nav-links" onClick={closeMobileMenu}>
                          Recipes
                      </Link>
                  </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
              </div>
          </nav>
      </>
    )
}