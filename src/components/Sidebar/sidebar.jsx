import React from "react";
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarPageLink,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='1' onClick={toggle}>
                        Technical
                    </SidebarLink>
                    <SidebarLink to='2' onClick={toggle}>
                        Workshops
                    </SidebarLink>
                    <SidebarLink to='3' onClick={toggle}>
                        Gaming
                    </SidebarLink>
                    <SidebarLink to='4' onClick={toggle}>
                        Cultural
                    </SidebarLink>
                    <SidebarLink to='5' onClick={toggle}>
                        Sports
                    </SidebarLink>
                    <SidebarLink to='highlights' onClick={toggle}>
                        Highlights
                    </SidebarLink>
                    <SidebarPageLink to='about' onClick={toggle}>
                        About
                    </SidebarPageLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;