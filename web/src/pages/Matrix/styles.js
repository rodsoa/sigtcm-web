import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #98c0e2;

  @media (max-width: 900px) {
    padding: 32px;
  }

  div.Buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;

    button {
      font-size: 24px;
      font-weight: bold;
    }
    button:nth-of-type(1) {
      margin-right: 16px;
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
        border: 8px solid #fff;
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
        border: 8px solid #eee;
        tr {
          margin: 16px;
          td {
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
        tr:nth-last-of-type(1) td {
          border-bottom: none;
        }
      }
    }
  }
`;
