import PropTypes from 'prop-types';
import { Description } from '../Description/Description';
import { Stats } from 'components/Stats/Stats';
import { CardItem } from './Profile.styled';

export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <CardItem>
      <Description
        username={username}
        tag={tag}
        avatar={avatar}
        location={location}
      />

      <Stats followers={followers} views={views} likes={likes} />
    </CardItem>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
