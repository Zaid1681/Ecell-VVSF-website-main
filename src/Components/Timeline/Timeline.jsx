import React from 'react'
import Day0TimeLine from "./Day0Timeline.jsx"
import Day1TimeLine from "./Day1Timeline.jsx"
import Day2TimeLine from "./Day2Timeline.jsx"

const Timeline = () => {
    return (
        <div className='section-padding'>
            <div id='timeline' className="timelineHeader section-padding" style={{ textAlign: "center"}}>
                <h1 className=' main-title-font'  >Event Timeline</h1>
            </div>
            <Day0TimeLine />
            <Day1TimeLine />
            <Day2TimeLine />

        </div>
    )
}

export default Timeline
