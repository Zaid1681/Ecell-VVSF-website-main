import React from 'react'
import "./AboutContent.css"
import VVSF from '../../assets/vvsf.png'

const ReverseAboutContent = (props) => {
  return (
    <div className='aboutContainer content-padding' style={{"flexDirection":"row-reverse"}}>
      <div className="aboutImg">
        <img  className='aboutRImage'  src={VVSF} alt="" />
      </div>
      <div className='aboutContent'>
        <h1 className='text-title'>{props.header}</h1>
        <p className='text-subtitle'>{props.content}</p>

      </div>
    </div>
  )
}

export default ReverseAboutContent
