import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #000015;
    min-height: 100vh;
    overflow-X: hidden;
`;

export const Header = styled.header`
    background: #130634;
    height: 80px;
    margin-top: -80px;
    padding: 2rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 1s all ease;
        height: 60px;
        margin-top: -60px;
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
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #a30a8d;
    border-radius: 1rem;
    border: 0.2rem solid #a30a8d;
    background: #130634;
    width: 4rem;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 0.5rem;
        width: 3rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #a30a8d;
        color: #130634;
    }
`;