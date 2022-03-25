import styled from 'styled-components';

export const TimeLineStyled = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    padding-top: 5rem;
`;

export const TimeLineEventStyled = styled.div`
    height: 20rem;
    width: 100%;
    display: flex;
    color: var(--text-color);
`;

export const TimeLineEffect = styled.div`
    width: 25%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    .line {
        width: 0.5rem;
        height: 100%;
    }
    .point {
        position: absolute;
        top: 0;
        height: 2.5rem;
        width: 2.5rem;
        background-color: var(--primary-color);
        border: 0.5rem solid;
        border-color: var(--point-border-line-bg);
        border-radius: 50%;
        box-shadow: var(--point-box-shadow);
    }
`;

export const TimeLineDataStyled = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: 75%;
    height: 100%;
    padding: 0 2.1rem 0 0;
`;