import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  background: #444;
  border: 0;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#444')};
  }

  span.titleButton {
    font-weight: bold;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
  }

  i {
    color: #fff;
  }
`;
