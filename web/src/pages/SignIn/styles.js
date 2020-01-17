import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  margin: 0 16px;
  max-width: 600px;
  margin-bottom: 128px;
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
