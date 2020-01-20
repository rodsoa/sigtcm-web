import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;
  padding: 48px 64px;

  .dropdow {
    padding: 16px 0;
    margin: 0;
    width: 100%;

    button {
      padding: 8px 16px;
      background: #fff;
      box-shadow: 0 0 2px rgba(244, 244, 244, 0.2);
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border: none;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background: #999;
        border-radius: 20px;
        padding-bottom: 14px;
      }
    }

    .listDropDow {
      width: 100%;
      margin: 4px 0;
      ul {
        padding: 8px 16px;
        width: 100%;
        background: #eee;
        li {
          padding: 4px 0 2px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          button {
            background: none;
            padding: 4px 0 2px;
          }
        }
        li:nth-last-of-type(1) {
          border-bottom: none;
        }
      }
    }
  }

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
`;

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  border-radius: 6px;
  margin-bottom: 32px;
`;
