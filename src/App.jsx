import Profile from './components/Profile/ProfileItem';
import FriendList from './components/FriendList/FriendList';
import userData from './components/userData.json';
import friends from './components/friends.json';

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
    </>
  );
};

export default App;
