import React from 'react'
import "./AboutContent.css"

const ReverseAboutContent = (props) => {
  return (
    <div className='aboutContainer-reverse content-padding'>
      <div className="aboutImg">
        <img  className='aboutRImage'  src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" />
      </div>
      <div className='aboutContent'>
        <h1 className='text-title'>{props.header}</h1>
        <p className='text-subtitle-reverse'>{props.content}</p>

      </div>
    </div>
  )
}

export default ReverseAboutContent
