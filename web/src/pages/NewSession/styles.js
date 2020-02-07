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
    margin: 16px 0;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-start;

    strong {
      font-size: 2rem;
      font-weight: normal;
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
      /* span {
        font-size: 2rem;
        flex: 1;
        text-align: right;
      }
      div {
        flex: 1;
        a {
          font-size: 2rem;
        }
      } */
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
  max-width: 700px;
  border-radius: 6px;
  margin-bottom: 32px;
`;
