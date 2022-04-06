import React from "react";
import logo from '../images/logo/navrachana_university_logo.png';
import {BiArrowBack} from 'react-icons/bi';

import {
    AboutContainer,
    AboutWrapper,
    HeadRow,
    LogoRow,
    WebsiteRow,
    DescriptionRow,
    WebsiteButton,
    BackButton,
    Content,
    Img,
} from './NuvElements';
import { useNavigate } from 'react-router-dom';

const Circle1 = require("../images/circles/Circle1.png");
 
const Nuv = () => {
    const navigate = useNavigate()

    return (
        <>
            <AboutContainer className="ab-nuv-container">
                <HeadRow>
                    <BackButton onClick={() => navigate(-1)}><BiArrowBack /></BackButton>
                </HeadRow>
                <AboutWrapper>   
                    <LogoRow>
                        <Img src={logo}/>
                    </LogoRow>
                    <WebsiteRow>
                        <WebsiteButton onClick={() => window.open("https://nuv.ac.in/", "_self")}>
                            Visit Website
                        </WebsiteButton>
                    </WebsiteRow>
                    <DescriptionRow>
                            <Content>Traditionally, the purpose of college education has been to create individuals who know everything about something. Unfortunately, this methodology also results in individuals who know little about anything else, except their subject. At NUV, we aim to create T-shaped personalities. Our students have working knowledge about a wide range of subjects and deep domain knowledge in one area of specialisation. We enable this through three synergies - Synergy of Theory & Practice, Synergy of Faculty & Industry, and Synergy of Youth & Experience.</Content>
                            <img src={Circle1} className="circle-svgs nuv-about-circle1" alt="circle-png"/>
                    </DescriptionRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default Nuv