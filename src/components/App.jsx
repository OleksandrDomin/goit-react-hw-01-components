import { Profile } from 'components/profile/Profile';
import user from '../../src/user.json/user.json';

import Statistics from 'components/statistics/Statistics';
import data from '../../src/data.json/data.json';

import FriendList from 'components/friendList/FriendList';
import friends from '../../src/friends.json/friends.json';

import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from '../../src/transactions.json/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  )
};
