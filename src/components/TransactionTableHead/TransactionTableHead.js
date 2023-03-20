import { TableHeadCell } from './TransactionTableHead.styled';

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </tr>
    </thead>
  );
};
