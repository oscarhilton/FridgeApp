import React, {Component} from 'react';

import getUserById from '../../actions/userActions';

class UserList extends Component {
  componentDidMount(){
    if(this.props.needsData){
      this.props.users.forEach((user)=>{
        console.log(user);
      })
    }
  }
  renderUsers(){
    if(this.props.users.length > 0){
      const list = this.props.users.map((user) => {
        return(
          <li key={user._id} className="list-group-item">
            <strong>{user.firstName + ' ' + user.lastName}</strong>
            <span> - {user.email}</span>
          </li>
        )
      });
      return list;
    }
  }
  render(){
    return(
      <ol className="list-group">
        {this.renderUsers()}
      </ol>
    )
  }
}


export default UserList;
