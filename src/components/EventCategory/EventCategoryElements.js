import styled from 'styled-components';
import { Link } from 'react-scroll';



export const EventCategoryContainer = styled.div`
    // color: #ffffff;
    // background: ${({bg}) => (bg ? '#073b4c' : '#052c39')};
    // background: linear-gradient(
    //     0deg,
    //     #073b4c 0%,
    //     #073b4c 20%,
    //     #07192f 60%,
    //     #07192f 100%
    // )};
    position: relative;

    .img1, .img2{
        position: absolute;
    }
    
    .img1{
        top: 0;
        left: -1rem;
        width: 5rem;
    }
    .img2{
        top: 5rem;
        right: -5rem;
        width: 10rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 0;
    }
`;

export const EventCategoryWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const EventCategoryRow = styled.div`
    display: grid;
    // grid-template-columns: 500px;
    grid-auto-column: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 'col2'`: `'col1 col1' 'col2 col2'`)};
        // grid-template-columns: 200px;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 0px;
    // padding: 0 2rem;
    grid-area: col1;
    width: 500px;
    text-align:justify;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        width: 300px;
        text-align: center;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 0px;
    padding: 0px 0px;
    grid-area: col2;
    background-color: #031d26;
    width: 500px;
    overflow: auto;
    text-align: justify;
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        width: 300px;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    // padding-bottom: 60px;
`;

export const CategoryTitle = styled.p`
    // color: #f3f3f7;
    color: ${({ darkTitle }) => (darkTitle ? '#052c39' : '#f3f3f7')};
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const CategorySubtitle = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ darkSubtitle }) => (darkSubtitle ? '#139fcd' : '#139fcd')};
    
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const CategoryDescription = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ darkDescription }) => (darkDescription ? '#052c39' : '#f3f3f7')};
`;

export const ImgWrap = styled.div`
    // max-width: 555px;
    width: 10em;
    height: 10em;
    height: 100%;
`;

export const Img = styled.img`
    width: 20em;
    height: 20em;
    margin: 0 0 0 0;
    padding-right: 0;
    // filter: blur(10px);
`;

export const TitleandRegisterButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const RegisterButton = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#f3f3f7' : '#139fcd')};
    color: #031d26;
    white-space: nowrap;
    margin-top: 10px;
    padding: 10px 20px;
    width: 200px;
    font-size: 15px;
    outline: none;
    border: none;
    cursor: pointer;
    display: absolute;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#139fcd' : '#f3f3f7')};
    }
`;

export const EventCardWrapper = styled.div`
    display: grid;
    // grid-template-columns: 500px;
    // grid-auto-column: minmax(auto, 1fr);
    grid-template-rows: 240px 240px 50px;
    grid-template-areas: "image" "text" "button";
    border-radius: 20px;
    background: #031d26;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
`;

export const EventCardImage = styled.div`
    grid-area: image;
    background-image: url(${props => props.img});
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-size: cover;
`;

export const EventCardTextWrapper = styled.div`
    grid-area: text;
    margin: 5px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const EventCardTextTitle = styled.h2`
    margin-top: 0px;
    font-size: 2rem;
    box-sizing: border-box;
    min-width: 0px;
    // line-height: 1.2;
    margin: 0px;
    background: linear-gradient(
        90deg,
        #f3f3f7 0%,
        #139fcd 100%
        // rgb(118, 230, 80) -1.13%,
        // rgb(249, 214, 73) 15.22%,
        // rgb(240, 142, 53) 32.09%,
        // rgb(236, 81, 87) 48.96%,
        // rgb(255, 24, 189) 67.94%,
        // rgb(26, 75, 255) 85.34%,
        // rgb(98, 216, 249) 99.57%
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
`;

export const EventCardTextSubtitle = styled.p`
    color: #139fcd;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 0px;
`;

export const EventCardTextBody = styled.p`
    color: #f3f3f7;
    font-size: 1.5rem;
    font-weight: 300;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const EventCardTextEventCriteria1 = styled.h6`
    color: #f3f3f7;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const EventCardTextEventCriteria2 = styled.h6`
    color: #f3f3f7;
    font-size: 1rem;
    font-weight: 300;
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const EventCardButtonWrapper = styled.div`
    grid-area: button;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #60b8d5;
`;

export const EventCardButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #031d26;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #139fcd;
        color: #031d26;
    }
`;

export const EventCardButtonText = styled.a`
    color: #031d26;
    text-decoration: none;
    font-weight: bold;
`;
