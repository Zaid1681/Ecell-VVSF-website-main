import React from 'react'
import "./Navbar.css"
// import logo from "../../assets/logo.png"
import VVSF_WORD from '../../assets/vvsf_word.png'

const Navbar = () => {

  return (
    <div className='navbarContainer '>
      <nav className=" navbar mb-0 trans navbar-expand-lg bg-body-tertiary">
        <div className="container navbarContainer ">
          <a className="navbar-brand " href="#">
            <img src={VVSF_WORD} alt="vvsf_logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto navLinks  mb-10 mb-lg-1">
              <li className="nav-item nav-link">
                <a className="nav-link nav-link-title " href="#">Home</a>
              </li>
              <li className="nav-item nav-link">
                <a className="nav-link nav-link-title " href="#about">About Us</a>
              </li>
              <li className="nav-item nav-link">
                <a className="nav-link nav-link-title " href="#timeline">Event Timeline</a>
              </li>
              <li className="nav-item nav-link">
                <a className="nav-link nav-link-title " href="#events">Our Events</a>
              </li>
              {/* <li className="nav-item nav-link">
                <a className=" nav-link-title " href="#talks">E-Talks</a>
              </li>
              <li className="nav-item nav-link">
                <a className=" nav-link-title " href="#">Pitches</a>
              </li> */}
              <li className="nav-item nav-link">
                <a className="nav-link nav-link-title " href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>


  )
}

export default Navbar
