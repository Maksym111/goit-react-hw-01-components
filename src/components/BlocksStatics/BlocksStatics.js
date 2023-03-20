import PropTypes from 'prop-types';
import { ListStatics, PercentCount, StaticItem } from './BlocksStatics.styled';

export const BlocksStatics = ({ stats }) => {
  return (
    <ListStatics>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StaticItem key={id}>
            <span>{label}</span>
            <PercentCount>{percentage}%</PercentCount>
          </StaticItem>
        );
      })}
    </ListStatics>
  );
};

BlocksStatics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
