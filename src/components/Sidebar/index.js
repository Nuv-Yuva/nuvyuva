import React from "react";
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarPageLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to='Countdown' onClick={toggle}>
                        HOME
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        ABOUT
                    </SidebarLink>
                    <SidebarLink to='events' onClick={toggle}>
                        EVENTS
                    </SidebarLink>
                    <SidebarLink to='highlights' onClick={toggle}>
                        HIGHLIGHTS
                    </SidebarLink>
                    <SidebarPageLink to='team' onClick={toggle}>
                        TEAM
                    </SidebarPageLink>
                    <SidebarPageLink to='Sponsor' onClick={toggle}>
                        SPONSOR
                    </SidebarPageLink>
                    <SidebarPageLink to='nuv' onClick={toggle}>
                        NUV
                    </SidebarPageLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;