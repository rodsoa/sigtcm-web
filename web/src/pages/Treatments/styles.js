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

  div.Add {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 70%;
    padding: 8px 16px;

    button {
      font-size: 24px;
      font-weight: bold;
    }
  }

  div.search {
    width: 100%;
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
  }

  div.table {
    width: 100%;

    table {
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      thead {
        background: #fff;

        tr {
          margin: 0;
          th {
            padding: 16px 8px;
            margin: 0;
            font-size: 1.8rem;
            font-weight: 400;
          }
        }
      }
      tbody {
        background: #eee;
        width: 100%;
        tr {
          margin: 16px;
          td {
            border-bottom: 1px solid #2b2b2b;
            text-align: center;
            padding: 8px;
            margin: 0 !important;

            button {
              border: none;
              background: none;
              color: blue;
              margin-right: 4px;
            }
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
