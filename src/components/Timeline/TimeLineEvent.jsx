import React from 'react'
import {TimeLineEventStyled, TimeLineEffect, TimeLineDataStyled} from './TimeLineElements';

const TimeLineEvent = () => {
  return (
    <TimeLineEventStyled>
        <TimeLineEffect>
            <div className="line"></div>
            <div className="point"></div>
        </TimeLineEffect>
        <TimeLineDataStyled>
            <div className="title">Event</div>
            <div className="event-desc">event desc</div>
        </TimeLineDataStyled>
    </TimeLineEventStyled>
  )
}

export default TimeLineEvent