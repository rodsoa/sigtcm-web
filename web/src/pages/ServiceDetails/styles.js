import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;
  padding: 32px 64px 64px;

  @media (max-width: 600px) {
    padding: 32px;
  }

  div.renderLabels {
    width: 100%;
    padding-bottom: 16px;
    border-bottom: 1px solid #fff;
    margin: 16px 0;
    box-shadow: 0.1rem 0.3rem 0.1rem -0.2rem rgba(0, 0, 0, 0.2);

    .labels {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding: 8px;

      span {
        display: flex;
        flex: 1;
        font-size: 1.6rem;
        margin: 8px 0;
        margin-right: 16px;
        max-lines: 1;

        strong {
          max-lines: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  div.labelInfo {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;

    .labels {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      padding: 8px 0;
    }
  }

  /* div.description {
    width: 100%;
    margin: 4px 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #fff;
    box-shadow: 0.1rem 0.3rem 0.1rem -0.2rem rgba(0, 0, 0, 0.2); */
`;

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  border-radius: 6px;
  margin-bottom: 32px;
`;
