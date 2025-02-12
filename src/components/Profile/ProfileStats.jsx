import clsx from "clsx";
import css from "./Profile.module.css";

export const ProfileStats = ({ userStats }) => {
  const { followers, views, likes } = userStats;
  return (
    <ul className={clsx(css.profileStatsList)}>
      <li className={clsx(css.profileStatsItem)}>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li className={clsx(css.profileStatsItem)}>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li className={clsx(css.profileStatsItem)}>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  );
};

export default ProfileStats;
