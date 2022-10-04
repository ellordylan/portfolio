import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
    SidebarMenu
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>
                        Home
                    </SidebarLink>

                    <SidebarLink to="/about" onClick={toggle}>
                        About Me
                    </SidebarLink>

                    <SidebarLink to="/portfolio" onClick={toggle}>
                        Portfolio
                    </SidebarLink>

                    <SidebarLink to="/resume" onClick={toggle}>
                        Resume
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://github.com/ellordylan" target="_blank">Website Code</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar