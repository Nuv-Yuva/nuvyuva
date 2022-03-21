import styled from 'styled-components';

export const Body = styled.body`
    background-color: #000015;
    min-height: 100vh;
    padding: 30px 0px 100px;
`;

export const Header = styled.header`
    background: #130634;
    height: 60px;
    margin-top: -60px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 1s all ease;
    }
`;

export const Heading = styled.h1`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: White;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin: 0;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        font-size: 2rem;
    }
`;

export const BackButton = styled.div`
    justify-self: flex-start;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #a30a8d;
    border-radius: 1rem;
    border: 0.2rem solid #a30a8d;
    background: #130634;
    width: 50px;
    padding: 0.5rem;
    margin-right: 1rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 768px) {
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #a30a8d;
        color: #130634;
    }
`;