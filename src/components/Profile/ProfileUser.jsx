import clsx from "clsx";
import css from "./Profile.module.css";

const ProfileUser = ({ name, tag, location, image }) => {
  return (
    <div className={clsx(css.profileUserContainer)}>
      <img src={image} />
      <p className={clsx(css.profileUserDesc)}>{name}</p>
      <p className={clsx(css.profileUserDesc)}>@{tag}</p>
      <p className={clsx(css.profileUserDesc)}>{location}</p>
    </div>
  );
};

export default ProfileUser;
