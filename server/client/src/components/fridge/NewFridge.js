import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewFridgeForm from '../fridge/NewFridgeForm';
import FoundUser from '../user/FoundUser';
import UserList from '../user/UserList';
import InfoMessage from '../common/InfoMessage';

import { createFridge } from '../../actions/fridgeActions';

class NewFridge extends Component {
  constructor(props){
    super(props);

    this.state = {
      usersToAdd: []
    }
    console.log(this.state);
  }
  createFridge(){
    var {dispatch} = this.props;
    dispatch(createFridge(this.props.foundUser));
  }
  addUser(user){
    console.log('From clickFunction', user);
    var index = this.state.usersToAdd.indexOf(user);
    if(index < 0){
      this.setState({
        usersToAdd: [
          ...this.state.usersToAdd,
          user
        ]
      });
    }
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Create a new Fridge</h2>
        <p>
          Look up a user to add by entering their email below.
        </p>
        <InfoMessage heading={this.props.auth.email} message={'is the email you will need to provide another user to join their fridge'} />
        <NewFridgeForm />
        <h3>Found user</h3>
        <FoundUser foundUser={this.props.foundUser} btnText={'Add this user'} clickFunction={this.addUser.bind(this)}/>
        <h3>Users to add to this fridge</h3>
        <UserList users={this.state.usersToAdd}/>
        <div>
          <button onClick={this.createFridge.bind(this)} type="button" className="btn btn-primary">Create new fridge</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    foundUser: state.foundUser,
    fridge: state.fridge
  };
}

export default connect( mapStateToProps )(NewFridge);
