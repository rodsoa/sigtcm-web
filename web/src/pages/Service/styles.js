import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;
  padding: 64px;

  @media (max-width: 900px) {
    padding: 32px;
  }

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
`;

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 32px;
`;
