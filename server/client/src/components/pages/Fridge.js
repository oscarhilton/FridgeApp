import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../user/UserList';
import ItemSearchBar from '../fridge/ItemSearchBar';
import ItemList from '../fridge/ItemList';
import ContentsList from '../fridge/ContentsList';

import { getFridgeById } from '../../actions/fridgeActions';

import formatDate from '../../modules/formatDate';

class Fridge extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastUpdated: '?'
    }
  }
  componentDidMount(){
    this.props.dispatch(getFridgeById(this.props.match.params.id))
  }
  componentWillReceiveProps(newProps){
    if(newProps.items !== this.props.items){
         this.setState({items: newProps.items })
     }
    if(newProps.fridge !== this.props.fridge){
         this.setState({fridge: newProps.fridge.current });
         var lastFridgeUpdate = formatDate(newProps.fridge.current.lastUpdated);
         this.setState({
           lastUpdate: lastFridgeUpdate
         })
         var items = newProps.fridge.current.items;
         items.forEach((item)=>{
           var formattedTime = formatDate(item.dateAdded);
           item.formattedDateAdded = formattedTime;
         })
     }
  }
  getDateCreated(){

  }
  handleItemClick(item){
    console.log('from Item Click: ', item);
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
              <ItemList items={this.state.items} fridge={this.state.fridge._id} />
            </div>
            <div className="col col-lg-6">
              <h4>Fridge contents</h4>
              <ContentsList contents={this.state.fridge.items}/>
            </div>
          </div>
          <div>
            <h4>Users</h4>
            <UserList users={this.state.fridge._users} />
          </div>
          <h4>
            <span className="label label-info">{this.state.lastUpdate}</span>
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

export default connect(mapStateToProps)(Fridge);
