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

  @media (max-width: 900px) {
    padding: 32px;
  }

  div.renderCod {
    width: 90%;
    margin: 8px 0;

    span {
      font-size: 2.4rem;
    }
  }

  div.Inputs {
    width: 90%;
    margin: 4px 0;
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      input {
        background: #fff;
        border: 0;
        height: 56px;
        padding: 0 15px;
        margin: 0 0 16px;
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
  }

  div.table {
    width: 100%;

    div {
      width: 100%;
      padding: 0 calc(5% + 16px);
      margin: 8px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 2.4rem;
      }
      a {
        font-size: 2.4rem;
      }
    }

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      thead {
        background: #444;
        tr {
          margin: 0;
          th {
            padding: 8px 8px 2px;
            margin: 0;
            font-size: 1.8rem;
            font-weight: 400;
            color: #fff;
          }
        }
      }
      tbody {
        background: #fff;
        width: 100%;
        tr {
          margin: 8px;
          td {
            text-align: center;
            padding: 8px;
            margin: 0 !important;
          }
          .lineBottom {
            height: 1px;
            width: 100%;
            background: #2b2b2b;
          }
        }
      }
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
