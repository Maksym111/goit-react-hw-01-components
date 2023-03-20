import PropTypes from 'prop-types';
import { TableBodyCell, TableBodyRow } from './TransactionTableBody.styled';

export const TableBody = ({ rows }) => {
  return (
    <tbody>
      {rows.map(({ id, type, amount, currency }) => {
        return (
          <TableBodyRow key={id}>
            <TableBodyCell>{type}</TableBodyCell>
            <TableBodyCell>{amount}</TableBodyCell>
            <TableBodyCell>{currency}</TableBodyCell>
          </TableBodyRow>
        );
      })}
    </tbody>
  );
};

TableBody.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
};
