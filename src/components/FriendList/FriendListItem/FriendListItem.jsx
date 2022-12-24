import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <li className={s.item}>
        <span className={isOnline ? s.statusOnLine: s.statusOffLine}></span>
        <img className={s.avatar} src={avatar} alt="User avatar" width={100} />
        <p className={s.name}>{name}</p>
      </li>
    );
};
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}