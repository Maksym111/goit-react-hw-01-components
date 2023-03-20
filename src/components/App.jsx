// import PropTypes from 'prop-types';
import user from 'user.json'
import data from 'data.json'
import friends from 'friends.json'
import transaction from 'transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return <div>
    <Profile profile={user} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
  </div>;
};

