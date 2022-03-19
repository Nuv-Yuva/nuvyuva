import React from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">HOME</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">ABOUT</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="events">EVENTS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="highlights">HIGHLIGHTS</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
