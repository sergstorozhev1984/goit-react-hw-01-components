import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
      <li className={css.item}>
        <span className={isOnline ? css.statusOnLine: css.statusOffLine}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width={100} />
        <p className={css.name}>{name}</p>
      </li>
    );
};
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}