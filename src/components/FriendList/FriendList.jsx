import { List, Item, Icon } from './FriendList.styled';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Item key={id}>
          <Icon isOnline={isOnline}></Icon>
          <img className="avatar" src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </Item>
      ))}
    </List>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
