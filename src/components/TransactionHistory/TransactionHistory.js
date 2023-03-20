import PropTypes from 'prop-types';
import { TableBody } from 'components/TransactionTableBody/TransactionTableBody';
import { TableHead } from 'components/TransactionTableHead/TransactionTableHead';
import { TransactionTable } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead />
      <TableBody rows={items} />
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
