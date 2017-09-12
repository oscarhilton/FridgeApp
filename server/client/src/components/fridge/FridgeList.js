import React, {Component} from 'react';

import formatDate from '../../modules/formatDate';

class FridgeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      fridge: []
    }
  }
  componentWillReceiveProps(newProps){
    if(newProps !== this.props.fridge){
      this.setState({
        fridge: newProps.fridge
      })
    }
  }
  renderFridges(){
    if(this.state.fridge){
      const list = this.state.fridge.map((fridge) => {
        const href = `/fridge/${fridge._id}`;
        return(
          <li key={fridge._id} className="list-group-item">
            <a href={ `/fridge/${fridge._id}` }>{fridge._id}</a>
            <span className="pull-right">
              <span className="label label-info">
                {formatDate(fridge.lastUpdated)}
              </span>
            </span>
          </li>
        )
      });
      return list;
    } else {
      return(
        <p>You don't have any fridges yet.</p>
      )
    }
  }
  render(){
    return(
      <ol className="list-group">
        {this.renderFridges()}
      </ol>
    )
  }
}

export default FridgeList;
