import PropTypes from 'prop-types';
import { FriendItem } from 'components/FriendListItem/FriendListItem';
import { Card, CardsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <CardsList>
      {friends.map(friend => {
        return (
          <Card key={friend.id}>
            <FriendItem friend={friend} />
          </Card>
        );
      })}
    </CardsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
