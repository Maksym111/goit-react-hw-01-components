import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Card, CardsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <CardsList>
      {friends.map(friend => {
        return (
          <Card key={friend.id}>
            <FriendListItem friend={friend} />
          </Card>
        );
      })}
    </CardsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
