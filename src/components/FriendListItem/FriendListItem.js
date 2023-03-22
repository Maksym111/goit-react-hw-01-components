import PropTypes from 'prop-types';
import { Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
