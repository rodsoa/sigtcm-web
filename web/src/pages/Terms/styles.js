import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.5);

  padding: 16px;
  max-height: 600px;
  border-radius: 8px;

  p {
    line-height: 3.2rem;
    font-size: 1.6rem;
    overflow-y: scroll;
  }
`;
