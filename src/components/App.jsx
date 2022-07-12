import user from '../data/user.json';
import data from '../data/statistic-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import LineSeparator from './LineSeparator/LineSeparator';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: "lightcyan"}}>
      <Profile username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats} />
      <LineSeparator/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <LineSeparator/>
      <FriendList friends={friends}/>
      <LineSeparator/>
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
