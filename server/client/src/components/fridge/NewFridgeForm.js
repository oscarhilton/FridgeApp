import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserByEmail } from '../../actions/userActions';

class NewFridge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(getUserByEmail(this.state.email));
  }
  render() {
    const { email } = this.state;
    return (
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
    );
  }
}

export default connect()(NewFridge);
