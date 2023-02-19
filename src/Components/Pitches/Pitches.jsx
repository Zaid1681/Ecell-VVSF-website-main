import React from 'react'
import "./Pitches.css"

const Pitches = () => {
  return (
    <div className='content-padding pitchesContainer'  data-aos="zoom-in">
      <div className="pitchesHeader text-center section-padding">
        <h1 className=' main-title-font "'>Team Head</h1>
        <hr className='m-auto line-padding' />
      </div>
      <div className="carouselTeamHead   ">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item  ">
              <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item ">
              <img src="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989__340.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pitches
