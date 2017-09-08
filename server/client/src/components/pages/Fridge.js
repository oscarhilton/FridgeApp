import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../user/UserList';
import ItemSearchBar from '../fridge/ItemSearchBar';
import ItemList from '../fridge/ItemList';

import { getFridgeById } from '../../actions/fridgeActions';

class Fridge extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastUpdated: '?'
    }
  }
  componentDidMount(){
    this.props.dispatch(getFridgeById(this.props.match.params.id));
  }
  componentWillReceiveProps(newProps){
    if(newProps.items !== this.props.items){
         this.setState({items: newProps.items })
     }
    if(newProps.fridge !== this.props.fridge){
         this.setState({fridge: newProps.fridge.current });
         this.getLastUpdate(newProps.fridge.current.lastUpdated);
     }
  }
  getLastUpdate(update){
    var updateDate = new Date(update);
    var currentDate = new Date();
    var seconds = (currentDate.getTime() - updateDate.getTime()) / 1000;
    var minutes = Math.floor(seconds / 60);
    if(seconds < 10){
      this.setState({
        lastUpdate: `Last updated a moment ago`
      })
    } else if(seconds < 60){
      this.setState({
        lastUpdate: `Last updated ${seconds} seconds ago`
      })
    } else if(seconds < 120){
      this.setState({
        lastUpdate: `Last updated ${minutes} minute ago`
      })
    } else {
      this.setState({
        lastUpdate: `Last updated ${minutes} minutes ago`
      })
    }
  }
  render() {
    console.log('state: ', this.state);
    if(this.props.fridge.validPage){
      return (
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <h4>Search for new items</h4>
              <ItemSearchBar />
              <ItemList items={this.state.items} />
            </div>
            <div className="col col-lg-6">
              <h4>Fridge contents</h4>
            </div>
          </div>
          <div>
            <h4>Users</h4>
            <UserList users={this.props.fridge.current._users} />
          </div>
          <h4>
            <span className="label label-success">{this.state.lastUpdate}</span>
          </h4>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="jumbotron">
            <h1>
              No Fridge found
            </h1>
          </div>
          <p>Couldn't find a fridge! Check your URL for errors</p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    fridge: state.fridge,
    items: state.items
  };
}
//this.props.items

export default connect(mapStateToProps)(Fridge);
