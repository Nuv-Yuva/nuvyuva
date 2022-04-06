import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { EventsData } from './EventsData';
import { FaRupeeSign } from 'react-icons/fa';
import Image from 'react-bootstrap/Image'
// import Circle1 from '.../assets/Circle1.png';
import { 
    EventCategoryContainer,
    EventCategoryWrapper,
    EventCategoryRow,
    Column1,
    Column2,
    TextWrapper,
    CategoryTitle,
    CategorySubtitle,
    CategoryDescription,
    EventCardWrapper,
    EventCardImage,
    EventCardTextWrapper,
    EventCardTextTitle,
    EventCardTextSubtitle,
    EventCardTextBody,
    EventCardTextEventCriteria1,
    EventCardTextEventCriteria2,
    EventCardButtonWrapper,
    EventCardButton,
    EventCardButtonText,
    ImgWrap,
    Img,
} from './EventCategoryElements';

const EventCategory = ({
    bg, 
    imgStart, 
    darkTitle,
    darkSubtitle,
    darkDescription,
    darkEventTitle,
    darkEventSubtitle,
    darkEventDescription,
}) => {
    const Circle1 = require("../images/circles/Circle1.png");
    console.log(Circle1)
    return (
        <div>
            {EventsData.map(data => {
                return (
                    <EventCategoryContainer bg={bg} id={data.id}>
                        <img src={Circle1} className="events-img1" alt="circle-png"/>
                        <img src={Circle1} className="events-img2" alt="circle-png"/>
                        <EventCategoryWrapper>
                            <EventCategoryRow imgStart={imgStart}>
                                <Column1 key={data.name}>
                                {/* <ImgWrap>
                                    <Image src={data.image} fluid={true} />
                                </ImgWrap> */}
                                <TextWrapper>
                                    <CategoryTitle darkTitle={darkTitle}>{data.name}</CategoryTitle>
                                    {/* <CategorySubtitle darkSubtitle={darkSubtitle}>{categorySubtitle}</CategorySubtitle> */}
                                    {/* <CategoryDescription darkDescription={darkDescription}>{categoryDescription}</CategoryDescription> */}
                                </TextWrapper>
                                </Column1>
                                <Column2>
                                    <Carousel fade interval='5000' touch={true} indicators={false}>
                                            {data.events.map(event => {
                                                return (
                                                    <Carousel.Item key={event.name}>
                                                        <EventCardWrapper>
                                                            <EventCardImage img={ event.image } />
                                                            <EventCardTextWrapper>
                                                                    <EventCardTextTitle darkEventTitle={darkEventTitle}>{event.name}</EventCardTextTitle>
                                                                    <EventCardTextBody darkEventDescription={darkEventDescription}>{event.description}</EventCardTextBody>
                                                                    <EventCardTextSubtitle darkEventSubtitle={darkEventSubtitle}><FaRupeeSign />{event.price}</EventCardTextSubtitle>
                                                                    <EventCardTextEventCriteria1>{event.group}</EventCardTextEventCriteria1>                    
                                                                    <EventCardTextEventCriteria2>{event.size}</EventCardTextEventCriteria2>  
                                                            </EventCardTextWrapper>
                                                            <EventCardButtonWrapper>
                                                                <EventCardButton onClick={() => window.open("https://www.nuv.ac.in/cpe-regn/", "_self")}>
                                                                    Register Now
                                                                </EventCardButton>
                                                            </EventCardButtonWrapper>
                                                        </EventCardWrapper>
                                                    </Carousel.Item>  
                                                );
                                            })}
                                    </Carousel>
                                </Column2>
                            </EventCategoryRow>
                        </EventCategoryWrapper>
                    </EventCategoryContainer>
                );
            })};
        </div>
    )
}

export default EventCategory