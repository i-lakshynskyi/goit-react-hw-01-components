import s from "./profile.module.scss";
import PropTypes from 'prop-types';


function Profile({username, tag, stats, location, avatar}) {
  const {followers, views, likes} = stats;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={s.avatar}
        />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.prototype = {
  username: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;
