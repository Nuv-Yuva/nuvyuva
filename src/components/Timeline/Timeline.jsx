import React from 'react'
import {TimeLineStyled} from './TimeLineElements'
import TimeLineEvent from './TimeLineEvent';

const Timeline = () => {
  return (
    <TimeLineStyled className="timeline">
        <TimeLineEvent />
        <TimeLineEvent />
    </TimeLineStyled>
  )
}

export default Timeline