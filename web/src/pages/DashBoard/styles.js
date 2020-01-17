import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;
  padding: 64px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 16px;

    button {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const ListButtons = styled.ul`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap: 1px;
  height: 100%;

  li {
    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      height: 100%;
      width: 305%;
      font-size: 24px;
      font-weight: bold;
    }
  }
`;

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 32px;
`;
