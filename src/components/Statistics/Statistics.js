import PropTypes from 'prop-types';
import {
  Statistic,
  Title,
  ListStatics,
  StaticItem,
  PercentCount,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title !== '' && title !== undefined && <Title>{title}</Title>}

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
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
