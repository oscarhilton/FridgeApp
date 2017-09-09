import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyFridges } from '../../actions/fridgeActions';

import FridgeList from '../fridge/FridgeList';

class YourFridges extends Component {
  constructor(props){
    super(props);
    this.state = {
      fridge: []
    }
  }
  componentDidMount() {
    this.props.dispatch(getMyFridges());
  }
  componentWillReceiveProps(newProps){
    if(newProps.fridge !== this.props.fridge){
         this.setState({fridge: newProps.fridge });
         console.log(this.state);
     }
  }
  renderList(){
    if(this.state.fridge){
      return(
        <FridgeList fridge={this.state.fridge} />
      )
    }
  }
  render() {
    return (
      <div className="jumbotron">
        <h2>Your Fridges</h2>
        <FridgeList fridge={this.state.fridge} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    fridge: state.fridge
  };
}

export default connect( mapStateToProps )(YourFridges);
