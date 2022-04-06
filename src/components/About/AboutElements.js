import styled from "styled-components";

export const AboutContainer = styled.div`
    background: #000015;
    justify-content: center;
    height: 100vh;
    align-items: center;
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 50%;
  grid-template-areas: "logo" "website" "description";
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

export const HeadRow = styled.div`
  display: flex;
  justify-content: left;
  height: 60px;
`;

export const LogoRow = styled.div`
  grid-area: logo;
  justify-content: center;
`;

export const WebsiteRow = styled.div`
  grid-area: website;
  justify-content: center;
  margin: auto;
  padding: 10px;
`;

export const DescriptionRow = styled.div`
  grid-area: description;
  justify-content: center;
  padding: 10px;
`;

export const Content = styled.p`
  grid-area: description;
  max-width: 600px;
  font-size: 20px;
  line-height: 30px;
  color: #f3f3f7;
  margin: auto;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 20px;
    max-width: 300px;
  }
`;

export const Img = styled.img`
    grid-area: logo;
    width: 50%;
    height: 50%:
`;

export const WebsiteButton = styled.div`
  grid-area: website;
  width: 100%;
  color: #fff;
  background: #B40A98;
  padding: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: auto;
  width: 200px;
  border-radius: 30px;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d941c0;
    color: #031d26;
  }
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
