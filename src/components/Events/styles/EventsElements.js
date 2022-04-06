import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: #000015;
    min-height: 100vh;
    overflow-X: hidden;
`;

export const Header = styled.header`
    background: #130634;
    height: 60px;
    margin-top: -60px;
    padding: 2rem;
    margin-bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
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
    font-weight: 400;
    letter-spacing: 6px;
    margin: 0;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        font-size: 1.5rem;
        letter-spacing: 1px;
    }
`;

export const Back = styled.div`
    display: block;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #a30a8d;
    border-radius: 1rem;
    border: 0.1rem solid #a30a8d;
    background: #130634;
    width: 3rem;
    padding: 0.4rem;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 0.4rem;
        width: 3rem;
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #a30a8d;
        color: #130634;
    }
`;

export const Head = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TitleWrapper = styled.h2`
    color: #f3f3f7;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 10px;
    text-transform: uppercase;
    position: relative;
    padding: 2rem;

    @media screen and (max-width: 960px) {
        font-size: 2rem;
        text-align: center;
    }
`;

export const Title = styled.div`
    position: relative;
    z-index: 5;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: left;
  height: 60px;
`;

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #031d26;
  border-radius: 30px;
  background: #B40A98;
  width: 50px;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d941c0;
    color: #031d26;
  }
`;