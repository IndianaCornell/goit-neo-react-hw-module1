import "./App.css";

import { username, tag, location, avatar, stats } from "../data/user.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import Profile from "./Profile/Profile";
import FriendsList from "./Friends/FriendsList";
import TransactionHistory from "./Transactions/TransactionHistory";

export default function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
