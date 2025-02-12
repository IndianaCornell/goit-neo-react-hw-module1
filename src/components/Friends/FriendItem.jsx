import clsx from "clsx";

import { AiFillHeart } from "react-icons/ai";

import css from "./Friends.module.css";

const FriendListItem = ({ friends: { isOnline, avatar, name } }) => {
  return (
    <li className={clsx(css.friendsListItem)}>
      <AiFillHeart fill={isOnline ? "green" : "red"} size={50}>
        {isOnline}
      </AiFillHeart>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

export default FriendListItem;
