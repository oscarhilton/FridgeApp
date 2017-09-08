import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fridge extends Component {
  constructor(props){
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>
            {this.props.match.params.id}
          </h1>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {  };
}

export default connect(mapStateToProps)(Fridge);
