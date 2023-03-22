import PropTypes from 'prop-types';
import {
  WrappDescription,
  Image,
  InfoUser,
  CardItem,
  ListStats,
  StatsElem,
  Number,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <CardItem>
      <WrappDescription>
        <Image src={avatar} alt={username} />
        <InfoUser>{username}</InfoUser>
        <InfoUser>@{tag}</InfoUser>
        <InfoUser>{location}</InfoUser>
      </WrappDescription>

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
    </CardItem>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
