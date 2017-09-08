import React from 'react';
import InfoMessage from '../common/InfoMessage';

const UserList = (props) => {
  const renderUsers = () => {
    const list = props.users.map((user) => {
      return(
        <li key={user._id}>
          <InfoMessage type='info' heading={user.firstName + ' ' + user.lastName} message={user.email} />
        </li>
      )
    });
    return list;
  };
  return(
    <ol>
      {renderUsers()}
    </ol>
  )
}

export default UserList;
