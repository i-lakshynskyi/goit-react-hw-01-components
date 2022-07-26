import React from 'react';
import PropTypes from 'prop-types';

import s from './friend-list.module.scss';
import FriendListItem from './FriendListItem';

FriendList.defaultProps = {
  friends: []
}
function FriendList({ friends = friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(fr =>
        <React.Fragment key={fr.id}>
          <FriendListItem status={fr.isOnline} avatar={fr.avatar} name={fr.name}/>
        </React.Fragment>
      )}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }))
}

export default FriendList;
