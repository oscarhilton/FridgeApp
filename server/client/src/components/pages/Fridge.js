import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from '../user/UserList';
import ItemSearchBar from '../fridge/ItemSearchBar';
import SearchResultsList from '../fridge/SearchResultsList';
import ContentsList from '../fridge/ContentsList';

import { getFridgeById } from '../../actions/fridgeActions';

import formatDate from '../../modules/formatDate';

class Fridge extends Component {
  constructor(props){
    super(props);
    this.state = {
      lastUpdated: '?',
      items: []
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
      this.state.fridge = newProps.fridge.foundFridge.current;
      var lastFridgeUpdate = formatDate(newProps.fridge.foundFridge.current.lastUpdated);
      this.state.lastUpdated = lastFridgeUpdate;
      var items = newProps.fridge.foundFridge.current.items;
       items.forEach((item)=>{
         var formattedTime = formatDate(item.dateAdded);
         item.formattedDateAdded = formattedTime;
       });
         console.log(this.state)
     }
  }
  getDateCreated(){

  }
  render() {
    if(this.state.fridge){
      return (
        <div className="container">
          <div className="row">
            <div className="col col-lg-6">
              <h4>Search for new items</h4>
              <ItemSearchBar />
              <SearchResultsList items={this.state.items} fridge={this.state.fridge._id} />
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
              Fridge is locked
            </h1>
          </div>
          <p>Either couldn't find a fridge or you have resticted access.</p>
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
