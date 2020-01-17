import styled from 'styled-components';
import { darken } from 'polished';

export const TCMButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  width: 100%;
  height: 44px;
  background: #444;
  border: 0;
  font-weight: bold;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.05, '#444')};
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  i {
    color: #fff;
  }
`;
