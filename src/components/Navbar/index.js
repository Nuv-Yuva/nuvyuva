import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLink,
  NavPageLink,
  DownloadLink,
  Button,
  MobileIcon,
  MobileDownloadLink,
  MobileButton,
} from "./NavbarElements";
import Brochure from "../brochure/brochure.pdf";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="Countdown">HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about">ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="events">EVENTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="highlights">HIGHLIGHTS</NavLink>
            </NavItem>
            <NavItem>
              <NavPageLink
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                TEAM
              </NavPageLink>
            </NavItem>
            <NavItem>
              <NavPageLink to="sponsor">SPONSOR</NavPageLink>
            </NavItem>
            <NavItem>
              <NavPageLink
                to="nuv"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                activeClass="active"
              >
                NUV
              </NavPageLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
