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

  div.search {
    width: 100%;
    margin: 16px 0 4px;
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

  .couponDesc {
    display: flex;
    flex-direction: row;
    background: #eee;
    padding: 8px;
    align-items: center;
    margin-bottom: 8px;

    strong {
      font-weight: 550;
      margin-right: 4px;
      min-width: 140px;
    }

    input {
      display: flex;
      flex: 1;
      /* width: 50%; */
      border: none;
      background: transparent;
      font-weight: bold;
      color: #3d5ba8;
      font-size: 2rem;
    }
  }
  .Desc {
    display: flex;
    flex-direction: row;
    background: #eee;
    padding: 8px;
    align-items: center;
    justify-content: space-between;

    strong {
      font-weight: 550;
      margin-right: 8px;
    }

    input {
      width: 70px;
      border: none;
      background: transparent;
      font-weight: bold;
      color: #3d5ba8;
      font-size: 2rem;
    }
    span {
      color: #fb6f91;
      font-weight: bold;
    }
  }

  .finalsData {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px;
    div {
      padding: 4px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    div:nth-of-type(1) {
      padding: 0px 8px 4px;
    }
  }

  .total {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    strong {
      margin-right: 8px;
    }

    div {
      background: #fff;
      padding: 8px;
    }
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
