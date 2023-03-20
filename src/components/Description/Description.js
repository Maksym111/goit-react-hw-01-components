import PropTypes from 'prop-types';
import { WrappDescription, Image, InfoUser } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <WrappDescription>
      <Image src={avatar} alt={username} />
      <InfoUser>{username}</InfoUser>
      <InfoUser>@{tag}</InfoUser>
      <InfoUser>{location}</InfoUser>
    </WrappDescription>
  );
};

Description.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
