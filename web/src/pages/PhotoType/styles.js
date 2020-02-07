import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;
  padding: 32px;

  @media (max-width: 900px) {
    padding: 32px;
  }

  div.questions {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 450px;
    padding: 16px;

    div {
      width: 100%;
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin: 8px 0;

      strong {
        margin-right: 32px;
      }
      input {
        flex: 1;
        height: 40px;
        border-radius: 4px;
        border: 1px solid rgba(61, 91, 168, 0.5);
        font-size: 2rem;
        padding: 4px;
      }
    }
  }
`;

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  border-radius: 6px;
  margin-bottom: 32px;
`;
