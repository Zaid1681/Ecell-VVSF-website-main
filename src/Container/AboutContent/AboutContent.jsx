import React from 'react'
import "./AboutContent.css"
import ECELL from '../../assets/ecell.png'


const AboutContent = (props) => {
  return (
    <div className='aboutContainer content-padding' >
      <div className="aboutImg">
        <img className='aboutImage' src={ECELL} alt="" />
      </div>
      <div className='aboutContent'>
        <h1 className='text-title'>{props.header}</h1>
        <p className='text-subtitle'>{props.content}</p>

      </div>
    </div>
  )
}

export default AboutContent
