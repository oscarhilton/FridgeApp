import React from 'react';

const UserList = (props) => {
  const renderUsers = () => {
    const list = props.users.map((user) => {
      console.log(user);
      return(
        <li key={user._id || user} className="list-group-item">
          <strong>{user.firstName + ' ' + user.lastName}</strong>
          <span> - {user.email}</span>
        </li>
      )
    });
    return list;
  };
  return(
    <ol className="list-group">
      {renderUsers()}
    </ol>
  )
}

export default UserList;
