import React, { useState } from 'react';
import hackathon from '../images/highlights/hackathon.png';
import concert from '../images/highlights/concert.jpeg';
import mun from '../images/highlights/mun.jpeg';

import {
    HighlightsContainer,
    HighlightsWrapper,
    HighlightsCard,
    HighlightsH1,
    HighlightsIcon,
    HighlightsH2,
    HighlightsP,
    HighlightsBtnWrapper,
    HighlightsButton,
} from './HighlightsElements';

const Circle1 = require("../images/circles/Circle1.png");

const Highlights = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HighlightsContainer id='highlights'>
            <img src={Circle1} className="highlights-img1 circle-svgs" alt="circle-png"/>
            <img src={Circle1} className="highlights-img2 circle-svgs" alt="circle-png"/>
            <img src={Circle1} className="highlights-img3 circle-svgs" alt="circle-png"/>
            <HighlightsH1>HIGHLIGHTS</HighlightsH1>
            <HighlightsWrapper>
                <HighlightsCard>
                    <HighlightsIcon src={hackathon}/>
                    <HighlightsH2>HACK FOR CHANGE</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='hackathon' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://hack-for-change.devpost.com/", "_self")}
                        >
                            REGISTER NOW
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={concert} style={{}}/>
                    <HighlightsH2>CONCERT</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={mun}/>
                    <HighlightsH2>NUV MUN</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='mun' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/", "_self")}
                        >
                            REGISTER NOW
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
            </HighlightsWrapper>
        </HighlightsContainer>
    )
}

export default Highlights