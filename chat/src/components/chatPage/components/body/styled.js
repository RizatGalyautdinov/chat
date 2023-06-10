import styled from "styled-components";

export const BodyHeader = styled.header`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  border-bottom: 2px solid #1a1a1a;
  padding: 1rem 0;
`;

export const Container = styled.div``;

export const SendedMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const RecivedMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SenderMessage = styled.div`
    max-width: 10rem;
    background: #535bf2;
    opacity: 0.75;
    color: white;
    padding: 0.5rem 1rem 0.5rem 1rem;
   
    p {
      margin: 0;
    }
`;

export const ReciverMessage = styled.div`
  max-width: 10rem;
  background: coral;
  opacity: 0.75;
  color: white;
  padding: 0.5rem 1rem 0.5rem 1rem;

  p {
    margin: 0;
  }
`;

export const LeaveButton = styled.button``;

