import React from 'react'
import '../styles/Events.css'
import Slider from './Slider'
import { EventsData } from './EventsData'

const GamingEvents = () => {
    return (
        <>
            {EventsData.map((val, index) => {
                const { id, name, image, events } = val
                console.log(events)
                return (
                    <div className="event-wrapper" key={id}>
                        <div className="title">
                            <h4>{name}</h4>
                        </div>
                        <div className="sliders">
                            <Slider Events={events} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default GamingEvents