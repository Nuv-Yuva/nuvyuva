import styled from "styled-components";
import { Link } from "react-scroll";

export const HighlightsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background: #000115;
  font-family: 'Playfair Display', serif;

.highlights-img1, .highlights-img2, .highlights-img3{
  position: absolute;
}

.highlights-img1{
  top: 0;
  left: -5rem;
  width: 15rem;
  transform: rotate(120deg);
}
.highlights-img2{
  bottom: 0rem;
  right: 0rem;
  width: 10rem;
}
.highlights-img3{
  bottom: 5rem;
  left: 1rem;
  width: 6rem;
}
  @media screen and (max-width: 40rem) {
    .highlights-img1{
      top: 0;
      left: -5rem;
      width: 10rem;
      transform: rotate(120deg);
    }
    .highlights-img2{
      bottom: 0rem;
      right: 0rem;
      width: 8rem;
    }
    .highlights-img3{
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const HighlightsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 3rem;
  padding: 0px 0px;
  z-index: 5;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightsCard = styled.div`
  background: #130735;
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 400px;
  padding: 20px;
  box-shadow: 0 0 1rem 0 #d941c0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const HighlightsIcon = styled.img`
  height: 70%;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 20px;
  // filter: blur(5px);
`;

export const HighlightsH1 = styled.h1`
  font-size: 2rem;
  color: #f3f3f7;
  margin-bottom: 64px;
  font-size: 40px;
  letter-spacing: 6px;
  positions: relative;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HighlightsH2 = styled.h2`
  font-size: 1.3rem;
  color: #f3f3f7;
  margin-bottom: 5px;
  margin-top: 5px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const HighlightsP = styled.p`
  font-size: 1rem;
  color: #f3f3f7;
  text-align: center;
`;

export const HighlightsBtnWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HighlightsButton = styled(Link)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #d941c0;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, #B40A98 0%, #570658 100%);
    color: #fff;
  }
`;
