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

  @media (max-width: 900px) {
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

  div.tableContacts {
    width: 100%;
    margin-bottom: 16px;
    div {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin: 8px 0;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 2rem;
        flex: 1;
        text-align: right;
      }
      div {
        flex: 1;
        a {
          font-size: 2rem;
        }
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

  div.description {
    width: 100%;
    margin: 4px 0;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #fff;
    box-shadow: 0.1rem 0.3rem 0.1rem -0.2rem rgba(0, 0, 0, 0.2);

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      div {
        button {
          border: none;
          color: #3d5ba8;
          background: none;
          font-size: 2rem;
          margin: 8px 8px 8px 0;
          padding: 4px 16px;
        }
        button:nth-of-type(1) {
          border-right: 1px solid #fff;
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      textarea {
        background: #fff;
        border: 0;
        min-height: 128px;
        font-size: 1.6rem;
        height: 100%;
        max-height: 300px;
        padding: 16px;
        margin: 0 0 16px;
        resize: none;
        border: none;
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

  div.search {
    width: 100%;
    margin: 4px 0;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    strong {
      margin: 0 16px;
      font-size: 2rem;
      font-weight: normal;
    }

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

export const Shadow = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 32px;
`;
