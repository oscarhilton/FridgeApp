import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserByEmail } from '../actions/userActions';
import { createFridge } from '../actions/fridgeActions';

class NewFridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderFoundUser(){
    if(this.props.foundUser.errorMessage){
      return(
        <div className="alert alert-danger">
          <span><strong>Error.</strong> - {this.props.foundUser.errorMessage}</span>
        </div>
      )
    } else if (this.props.foundUser.firstName) {
      return(
        <div>
          <div className="alert alert-success">
            {this.props.foundUser.firstName} {this.props.foundUser.lastName} (<span>{this.props.foundUser.email})</span>
          </div>
          <div>
            <button type="button" className="btn btn-success">Add this user</button>
          </div>
        </div>
      )
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(getUserByEmail(this.state.email));
  }
  createFridge(){
    console.log('Creating!');
    var {dispatch} = this.props;
    dispatch(createFridge(this.props.foundUser));
  }
  render() {
    const { email } = this.state;
    return (
      <div className="jumbotron">
        <h2>Create a new Fridge</h2>
        <p>
          Look up a user to add by entering their email below.
        </p>
        <div className="alert alert-info">
          <strong>{this.props.auth.email}</strong> is the email you will need to provide another user to join their fridge.
        </div>
        <form onSubmit={this.onSubmit} className="form-horizontal">
          <div className="form-group">
            <label className="col-sm-3 control-label">Email address</label>
            <div className="col-sm-9">
              <input
                value={email}
                onChange={this.onChange}
                name="email"
                type="text"
                id="Email"
                placeholder="Enter email address"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Look up user
              </button>
            </div>
          </div>
        </form>
        <div>
          <h3>Found user</h3>
          {this.renderFoundUser()}
        </div>
        <div>
          <h3>Users to add to this fridge</h3>
          <ul>
            <li>{this.props.auth.firstName}</li>
          </ul>
        </div>
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
