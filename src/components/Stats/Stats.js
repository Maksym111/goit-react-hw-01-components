import PropTypes from 'prop-types';
import { ListStats, Number, StatsElem } from './Stats.styled';

export const Stats = ({ followers, views, likes }) => {
  return (
    <ListStats>
      <StatsElem>
        <span>Followers</span>
        <Number>{followers}</Number>
      </StatsElem>
      <StatsElem>
        <span>Views</span>
        <Number>{views}</Number>
      </StatsElem>
      <StatsElem>
        <span>Likes</span>
        <Number>{likes}</Number>
      </StatsElem>
    </ListStats>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
