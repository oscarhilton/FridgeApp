import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewFridgeForm from './NewFridgeForm';
import FoundUser from './FoundUser';
import InfoMessage from './common/InfoMessage';
import { getUserByEmail } from '../actions/userActions';
import { createFridge } from '../actions/fridgeActions';

class NewFridge extends Component {
  constructor(props) {
    super(props);
  }
  createFridge(){
    console.log('Creating!');
    var {dispatch} = this.props;
    dispatch(createFridge(this.props.foundUser));
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Create a new Fridge</h2>
        <p>
          Look up a user to add by entering their email below.
        </p>
        <InfoMessage bold={this.props.auth.email} message={'is the email you will need to provide another user to join their fridge'} />
        <NewFridgeForm />
        <FoundUser foundUser={this.props.foundUser} />
        >>>>
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
