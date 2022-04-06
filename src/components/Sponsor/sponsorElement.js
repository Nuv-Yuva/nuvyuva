import styled from "styled-components";

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #031d26;
  border-radius: 30px;
  background: #B40A98;
  width: 50px;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #d941c0;
    color: #031d26;
  }
`;

export const HeadRow = styled.div`
  display: flex;
  justify-content: left;
  height: 60px;
`;