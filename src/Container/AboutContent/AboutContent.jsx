import React from 'react'
import "./AboutContent.css"

const AboutContent = (props) => {
  return (
    <div className='aboutContainer content-padding'  >
      <div className="aboutImg" data-aos="zoom-out"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
        <img className='aboutImage' src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" />
      </div>
      <div className='aboutContent'>
        <h1 className='text-title'>{props.header}</h1>
        <p className='text-subtitle'>{props.content}</p>

      </div>
    </div>
  )
}

export default AboutContent
