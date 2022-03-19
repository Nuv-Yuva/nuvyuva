import styled, { ServerStyleSheet } from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #010606;
    justify-content: center;
    align-items: center;
`;

export const FooterWrap = styled.div`
    padding: 24px 24px;
    display: absolute;
    flex-direction: column:
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterText = styled.h1`
    font-size: 24px;
    color: red;
    text-align: center;
`;

export const CopyrightWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto 0 auto;
    padding: 24px 24px;
    @media screen and (max-width: 820px) {
        flex-direction: row;
    }
`;

export const WebsiteRights = styled.small`
    color: #f3f3f7;
`;