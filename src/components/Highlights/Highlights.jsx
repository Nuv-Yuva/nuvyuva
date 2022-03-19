import React, { useState } from 'react';
import hackathon from './hackathon_1.png';
import concert from './concert_1.jpg';
import mun from './mun_1.jpg';

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
} from './HighlightsSC';

const Highlights = () => {
    const  [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HighlightsContainer id='highlights'>
            <HighlightsH1>Highlights</HighlightsH1>
            <HighlightsWrapper>
                <HighlightsCard>
                    <HighlightsIcon src={hackathon}/>
                    <HighlightsH2>Hack For Change</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='hackathon' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                        >
                            Coming Soon
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
                <HighlightsCard>
                    <HighlightsIcon src={concert}/>
                    <HighlightsH2>Concert</HighlightsH2>
                    {/* <EventsP>Description</EventsP> */}
                    <HighlightsBtnWrapper>
                        <HighlightsButton 
                            to='concert' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            onClick={() => window.open("https://forms.gle/mM92w2wrtnvWiA2c9", "_self")}
                        >
                            Register Now
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
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
                        >
                            Coming Soon
                        </HighlightsButton>
                    </HighlightsBtnWrapper>
                </HighlightsCard>
            </HighlightsWrapper>
        </HighlightsContainer>
    )
}

export default Highlights