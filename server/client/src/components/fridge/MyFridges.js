import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyFridges } from '../../actions/fridgeActions';

class YourFridges extends Component {
  componentDidMount() {
    this.props.dispatch(getMyFridges());
  }
  displayFridges() {
    var fridgeList = this.props.fridge;
    console.log('fridgeList: ', fridgeList);
    if(fridgeList.data){
      var list = fridgeList.data.map((d) => {
          console.log(d);
           return(
             <li key={d._id}>{d._id}</li>
           )
        });
      return(
        <ul>{list}</ul>
      );
    }
  }
  render() {
    return (
      <div className="jumbotron">
        {this.displayFridges()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fridge: state.fridge
  };
}

export default connect( mapStateToProps )(YourFridges);
