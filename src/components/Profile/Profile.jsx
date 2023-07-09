import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  TagName,
  Location,
  Label,
  Quantity,
  StatusItem,
  StatusList,
} from './Profile.styled';

const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <TagName>@{tag}</TagName>
        <Location>{location}</Location>
      </Description>

      <StatusList>
        <StatusItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatusItem>
        <StatusItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatusItem>
      </StatusList>
    </Container>
  );
};

export default Profile;

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
