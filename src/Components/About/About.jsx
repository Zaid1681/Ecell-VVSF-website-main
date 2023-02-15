import React from 'react'
import AboutContent from '../../Container/AboutContent/AboutContent'
import ReverseAboutContent from '../../Container/AboutContent/ReverseAboutContent'
import "./About.css"

const About = () => {
    return (
        <div className="about " id='about'>
            <div className=" text-center section-padding">
                <h1 className='main-title-font'>About Us</h1>
                <hr className='m-auto line-padding' />
            </div>
            <div className="aboutContents">
                <AboutContent header="What is Ecell ?" content="It is a student-run and faculty-led group that works to develop the skills of aspiring engineers. It began in 2015 and now has an impressive 100+ students from different V.C.E.T. branches participating. Students participate in a wide range of activities to develop their entrepreneurial mindset,  business modelling skills and many more through various types of seminars, workshops, presentations, and prototype development of concepts." />
                <ReverseAboutContent header="What is VVSF ?"content="It is a one-stop solution for budding entrepreneurs. Here we gather the best startups, founders, investors, and mentors. A two-day event will feature a variety of events, including talks, pitches, exhibitions, and more. We want to foster an entrepreneurial culture throughout the entire district. This is a fantastic chance for individuals to establish a network for greatly expanding their enterprises. " />
            </div>
        </div>

    )
}

export default About
