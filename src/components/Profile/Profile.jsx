import clsx from "clsx";
import css from "./Profile.module.css";

import ProfileStats from "./ProfileStats";
import ProfileUser from "./ProfileUser";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profileCard)}>
      <ProfileUser name={name} tag={tag} location={location} image={image} />
      <ProfileStats userStats={stats} />
    </div>
  );
};

export default Profile;
