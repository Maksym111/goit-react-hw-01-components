import PropTypes from 'prop-types';
import { Name, Status } from './FriendListItem.styled';

export const FriendItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <>
      <Status status={isOnline}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.object.isRequired,
};
