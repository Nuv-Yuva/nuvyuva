import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #031d26;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0': '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #f3f3f7;
`;

export const Icon = styled.div`
    position: absolute;
    top: 0.3rem;
    right: 1rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #f3f3f7;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, 80px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(7, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #f3f3f7;
    cursor: pointer;
    &:hover {
        color: #139fcd;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarPageLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #f3f3f7;
    cursor: pointer;
    &:hover {
        color: #139fcd;
        transition: 0.2s ease-in-out;
    }
`;