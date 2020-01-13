import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  margin: 0 16px;
  max-width: 600px;
`;

export const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #98c0e2;
  padding: 64px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input {
      background: #fff;
      border: 0;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 16px;
    }
    input:nth-last-of-type(1) {
      margin: 0;
    }
    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  span {
    color: #fb6f91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  a {
    margin-top: 15px;
    color: #fff;
    font-size: 15px;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const FooterLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 64px;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  button {
    margin: 8px 0;
    width: 100%;
    height: 44px;
    background: #444;
    border: 0;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;
    color: #fff;
    &:hover {
      background: ${darken(0.05, '#444')};
    }
  }
`;
