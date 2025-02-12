import clsx from "clsx";

import css from "./Friends.module.css";

import FriendListItem from "./FriendItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className={clsx(css.friendsList)}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friends={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
