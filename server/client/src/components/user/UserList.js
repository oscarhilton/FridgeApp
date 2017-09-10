import React, {Component} from 'react';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps !== this.props){
      console.log(newProps, this.props);
      this.setState({
        users: newProps.users
      })
    }
    console.log('newState', this.state)

  }
  renderUsers(){
    if(this.state.users.length > 0){
      const list = this.state.users.map((user) => {
        console.log(user, 'each user');
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
