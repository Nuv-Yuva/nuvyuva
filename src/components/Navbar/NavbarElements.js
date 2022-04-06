import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000015;
  height: 50px;
  margin-top: -60px;
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

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 80px 0px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #f3f3f7;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #f3f3f7;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;
export const NavLink = styled(LinkS)`
  color: #f3f3f7;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &.active {
    color: #B40A98;
    border-bottom: 3px solid #b40a98;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    color: #B40A98;
  }
`;

export const NavPageLink = styled(LinkR)`
  color: #f3f3f7;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &.active {
    color: #b40a98;
    border-bottom: 3px solid #139fcd;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    color: #b40a98;
  }
`;

export const DownloadLink = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #b40a98;
  white-space: nowrap;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000015;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c951b6;
    color: #000015;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    transform: translate(-60%, 10%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f3f3f7;
    margin-top: -5px;
  }
`;

export const MobileButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    transform: translate(-50%, 20%);
    border-radius: 50px;
    background: #b40a98;
    white-space: nowrap;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
      transition: all 0.2s ease-in-out;
      background: #b40a98;
      color: #010606;
    }
  }
`;
