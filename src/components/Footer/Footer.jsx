import {
    FooterContainer,
    CopyrightWrap,
    WebsiteRights,
} from './FooterSC';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <CopyrightWrap>
                <WebsiteRights>
                    <FaCopyright /> NUV Yuva {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>           
            </CopyrightWrap>
        </FooterContainer>
    )
}

export default Footer