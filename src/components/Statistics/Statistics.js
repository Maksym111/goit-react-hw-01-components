import PropTypes from 'prop-types';
import { BlocksStatics } from 'components/BlocksStatics/BlocksStatics';
import { Statistic, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title !== '' && title !== undefined && <Title>{title}</Title>}

      <BlocksStatics stats={stats} />
    </Statistic>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
