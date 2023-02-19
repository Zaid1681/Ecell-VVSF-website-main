import React from 'react'
import "./Header.css"
import headerBg from "../../assets/headerBg.jpg"
import ecell_logo from "../../assets/ecell_logo.png"
import learn from "../../assets/learn.png"
import vvsf from "../../assets/vvsf.png"

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="bgHeader">

        <div className="fgHeader" >
          <div className="fgLogo1"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"  >
            <div>
              <img className='efEcellLogo' src={ecell_logo} alt="" />
            </div>
            <div>
              <h2 style={{ color: "white" }}>&</h2>
            </div>
            <div>
              <img className='efEcellLogo learn' src={learn} alt="" />
            </div>

          </div>
          <div className="fgLogo2">
            <h1 data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300" style={{ color: "white", fontWeight: "600" }}>PRESENT</h1>
            <div>
              <img className='efEcellLogo vvsfLogo' data-aos="zoom-out-up" data-aos-duration="2000" src={vvsf} a
                lt="" />
            </div>
            <span data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="1000"
            >#startupsprint</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header
