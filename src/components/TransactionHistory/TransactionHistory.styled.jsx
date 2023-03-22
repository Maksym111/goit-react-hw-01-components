import styled from '@emotion/styled';

const TransactionTable = styled.table`
  margin: 0 auto;
  margin-top: 30px;
  padding: 0;
  border: none;

  box-shadow: 0px 5px 12px -3px rgba(0, 0, 0, 0.75);
`;

const TableHeadCell = styled.th`
  width: 300px;
  padding: 15px;

  font-size: 14px;
  text-transform: uppercase;
  color: white;

  background-color: #00bcd5;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const TableBodyCell = styled.td`
  width: 300px;
  padding: 15px;

  font-size: 14px;
  text-transform: capitalize;
  text-align: center;
`;

const TableBodyRow = styled.tr`
  :nth-of-type(even) {
    background-color: rgb(206, 206, 226);
  }
`;

export { TransactionTable, TableHeadCell, TableBodyCell, TableBodyRow };
