import s from './friend-list.module.scss';
import PropTypes from 'prop-types';


function FriendListItem({ status, name, avatar }) {
  return (
    <li className={s.item}>
      <span className={!status ? s.status : `${s.status} ${s.active}`}></span>
      <img className={s.avatar} src={avatar} alt='User avatar' />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  status: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string
}

export default FriendListItem;
