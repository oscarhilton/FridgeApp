import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login with google</a>;
      default:
        return (
          <p>
            Hello {this.props.auth.firstName}. <a href="/api/logout">Logout</a>
          </p>
        );
    }
  }
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-faded">
        <a className="navbar-brand" href="/">
          FridjApp
        </a>
        {this.renderContent()}
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
