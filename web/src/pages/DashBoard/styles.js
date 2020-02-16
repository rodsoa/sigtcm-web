import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px 16px;

    button {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const ListButtons = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;

  li {
    width: 100%;
    .rowTwoButtons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        height: 100px;
        width: 50%;
        font-size: 24px;
        font-weight: bold;
        margin: 8px 8px 0;
      }
    }
  }
`;
