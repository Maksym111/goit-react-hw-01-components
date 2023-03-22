import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHeadCell,
  TableBodyCell,
  TableBodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableBodyRow key={id}>
              <TableBodyCell>{type}</TableBodyCell>
              <TableBodyCell>{amount}</TableBodyCell>
              <TableBodyCell>{currency}</TableBodyCell>
            </TableBodyRow>
          );
        })}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
