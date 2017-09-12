import React, {Component} from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: this.props.users
    }
    console.log(this.state.users.length, '<--- STATE OF USERLIST')
  }
  componentWillReceiveProps(newProps){
    console.log(newProps, 'NEW PROPS!??');
    if(newProps.users !== this.props.users){
      this.setState({
        users: newProps.users
      })
    }
  } // NEEDED FOR DASHBOARD!!
  renderUsers(){
      let list = '';
      if(this.state.users.length > 0){
        console.log(this.state.users.length);
        list = this.state.users.map((user) => {
          return(
            <p>hello</p>
          )
        });
        console.log(list);
      } else {
        return list = () => { return <li>nothing found</li> }
        console.log(list);
      }
      return list;
  }
  render(){
    return(
      <ol className="list-group">
        {this.renderUsers()}
      </ol>
    )
  }
}

function mapStateToProps(state) {
  return {
    foundUser: state.foundUser,
  };
}

// <li key={user._id} className="list-group-item">
//   <strong>{user.firstName + ' ' + user.lastName} hi hi hello</strong>
//   <span> - {user.email}</span>
// </li>

export default connect(mapStateToProps)(UserList);

// <li key={user._id} className="list-group-item">
//   <strong>{user.firstName + ' ' + user.lastName}</strong>
//   <span> - {user.email}</span>
// </li>
