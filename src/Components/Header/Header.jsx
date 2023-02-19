import React from 'react'
import "./Header.css"
import design1 from "../../assets/design1.jpg"
import ecell_logo from '../../assets/ecell_logo.png'
import vvsf_logo from '../../assets/vvsf_logo.png'
import learn_logo from '../../assets/learn_logo.png'

const Header = () => {
  return (
    <div className="header">
      <div className="bgHeader">
        <div className="fgHeader">
            <div className="headerCenter">
              <div className="row">
                <div className="ecell-logo">
                    <img src={ecell_logo} alt="" />
                </div>
                <div className="para">
                    <p>&</p>
                </div>
                <div className="learn-logo">
                    <img src={learn_logo} alt="" />
                </div>
              </div>

              <div className="row">
                <div className="para-present">
                  <p>PRESENTS</p>
                </div>
              </div>

              <div className="row">
                <div className="vvsf-logo">
                    <img src={vvsf_logo} alt="" />
                </div>
              </div>

              <div className="row">
                <div className="para-sprint">
                  <p>#startupsprint</p>
                </div>
              </div>

            </div>
            

        </div>
      </div>

    </div>
  );
}

export default Header
