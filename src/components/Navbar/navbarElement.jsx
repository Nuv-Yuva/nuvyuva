import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";


export const Nav = styled.nav`
  background: #000115;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: center;
height: 60px;
z-index: 1;
width: 100%;
padding: 0px 0px;
max-width: 1100px;
`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    align-items: center;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
}
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &.active {
        color: #B40A98;
        transition: 0.2s ease-in-out;
    }
    &:hover {
        color: #B40A98;
    }
`
