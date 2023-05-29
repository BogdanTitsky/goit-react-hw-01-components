import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

import styled from 'styled-components';

const ListContainer = styled.ul`
  margin: 0 auto;
  width: 300px;
  padding: 0;
  margin-bottom: 50px;
`;

export const FriendList = ({ friends }) => {
  return (
    <ListContainer>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
