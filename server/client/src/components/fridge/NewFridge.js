import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoMessage from '../common/InfoMessage';
import NewFridgeForm from '../fridge/NewFridgeForm';
import FoundUser from '../user/FoundUser';
import UserList from '../user/UserList';

import { createFridge } from '../../actions/fridgeActions';
import { setUserList } from '../../actions/fridgeActions';

class NewFridge extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: '',
      usersToAdd: []
    }
  }
  componentDidMount(){
    var {dispatch} = this.props;
    dispatch(setUserList()).then(()=> {
      this.updateListState(this.props.fridge.userList.usersToAdd);
    });
  }
  updateListState(user){
    this.setState({
      usersToAdd: [...this.state.usersToAdd, user]
    })
  }
  createFridge(){
    console.log(this.state.usersToAdd, 'userstoadd');
    var {dispatch} = this.props;
    dispatch(createFridge(this.state.usersToAdd));
  }
  addUser(user){
    var index = this.state.usersToAdd.indexOf(user);
    if(index < 0){
      this.setState({
        usersToAdd: [
          ...this.state.usersToAdd,
          user
        ]
      });
    } else {
      this.setError("You can't add the same user twice!");
    }
  }
  setError(error){
    this.setState({
      error
    })
  }
  displayError(){
    if(this.state.error !== ''){
      return(
        <InfoMessage type='danger' heading='Oops!' message={this.state.error} />
      )
    }
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Create a new Fridge</h2>
        <p>
          Look up a user to add by entering their email below.
        </p>
        {this.displayError()}
        <InfoMessage type='info' heading={this.props.auth.email} message={'is the email you will need to provide another user to join their fridge'} />
        <NewFridgeForm />
        <h3>Found user</h3>
        <FoundUser foundUser={this.props.foundUser} btnText={'Add this user'} clickFunction={this.addUser.bind(this)}/>
        <h3>Users to add to this fridge</h3>
        <UserList users={this.state.usersToAdd} />
        <button onClick={this.createFridge.bind(this)} type="button" className="btn btn-primary">Create New Fridge</button>
      </div>
    );
  }
}

//

function mapStateToProps(state) {
  return {
    auth: state.auth,
    foundUser: state.foundUser,
    fridge: state.fridge
  };
}

export default connect( mapStateToProps )(NewFridge);
