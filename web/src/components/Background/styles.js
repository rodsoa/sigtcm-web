import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 16px;
  top: 0;
  bottom: 0;

  animation-name: background;
  animation-duration: 1000ms;

  @keyframes background {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
