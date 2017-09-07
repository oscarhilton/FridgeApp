import React from 'react';

const UserList = (props) => {
  const renderUsers = () => {
    console.log(props.users);
    const list = props.users.map((user) => {
      return(
        <li key={user._id}>{user.firstName} {user.lastName}</li>
      )
    });
    return list;
  };
  return(
    <ul>
      {renderUsers()}
    </ul>
  )
}

export default UserList;
