import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewFridge from './NewFridge';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            Welcome back, {this.props.auth.firstName}.
          </h1>
        </div>
        <NewFridge />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
