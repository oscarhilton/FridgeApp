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
      items: [],
      users: []
    }
  }
  componentDidMount(){
    this.props.dispatch(getFridgeById(this.props.match.params.id))
  }
  componentWillReceiveProps(newProps){
    console.log(newProps, '<----- NEW PROPS');

    const fridgeProps = this.props.fridge;

    const { fridge, items } = newProps;
    const { users, lastUpdated, contents, id } = fridge;

    if(fridge !== fridgeProps){
      contents.forEach( (item) => {
        const formattedTime = formatDate(item.dateAdded);
        item.formattedDateAdded = formattedTime;
      })
      this.setState({
        contents,
        id
      }, () => { console.log(this.state) })
    }
    if(users !== fridgeProps.users){
      this.setState({
        users
      })
    }
    if(lastUpdated !== fridgeProps.lastUpdated){
      var newTime = formatDate(lastUpdated);
      this.setState({
        lastUpdated: newTime
      })
    }
    if(items !== this.props.items){
      this.setState({
        items
      })
    }
  }
  getDateCreated(){

  }
  render() {
    console.log(this.state.users, '<----- USERS STATE !? :=)');
    if(this.props.fridge.validPage){
      return (
        <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <h4>Search for new items</h4>
            <ItemSearchBar />
            <SearchResultsList
              items={this.state.items}
              fridge={this.state.id}
              contents={this.state.contents}
              />
          </div>
          <div className="col col-lg-6">
            <h4>Fridge contents</h4>
            <ContentsList contents={this.state.contents}/>
          </div>
        </div>
          <div>
            <h4>Users</h4>
            <UserList users={this.state.users} />
          </div>
          <h4>
            <span className="label label-info">{this.state.lastUpdated}</span>
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
//
// <div className="row">
//   <div className="col col-lg-6">
//     <h4>Search for new items</h4>
//     <ItemSearchBar />
//     <SearchResultsList items={this.state.items} fridge={this.state.fridge._id} />
//   </div>
//   <div className="col col-lg-6">
//     <h4>Fridge contents</h4>
//     <ContentsList contents={this.state.fridge.items}/>
//   </div>
// </div>


// <h4>
//   <span className="label label-info">{this.state.lastUpdate}</span>
// </h4>

function mapStateToProps(state) {
  return {
    fridge: state.fridge,
    items: state.items
  };
}

export default connect(mapStateToProps)(Fridge);
