import styled from 'styled-components';

export const StatsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 3rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 60rem){
        justify-content: space-between;
    }

    @media screen and (max-width: 40rem){
        flex-direction: column;
    }
`;

export const StatsHeading = styled.h1`
    color: rgb(243, 243, 247);
    font-size: 3rem;
    letter-spacing: 1.4px;
    padding: 1rem 0;
`;

export const VisitorCount = styled.div`
    color: rgb(243, 243, 247);
    font-size: 3rem;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const VisitorsHeading = styled(StatsHeading)`
    font-size: 0.8rem;
    margin: 0;
    padding: 1rem 0;
    text-transform: uppercase;
`;

export const ViewsHeading = styled(VisitorsHeading)``;

export const WrapStats = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 35%;

    @media screen and (max-width: 40rem){
        width: 100%;
        justify-content: center;
    }
`;

export const WrapVisitors = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 3rem;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
`;

export const WrapDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(243, 243, 247);
    width: 40%;

    @media screen and (max-width: 60rem){
        width: 60%;
    }

    @media screen and (max-width: 40rem){
        width: 100%;
        text-align: center;
    }
`;

export const Desc = styled.div``;

export const WrapViews = styled(WrapVisitors)``;
