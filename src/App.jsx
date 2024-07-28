import Profile from './components/Profile/ProfileItem';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction/TransactionHistory';
import userData from './components/userData.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
