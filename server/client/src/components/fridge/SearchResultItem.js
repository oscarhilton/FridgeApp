import React, {Component} from 'react';

class SearchResultItem extends Component {
  handleClick(item){

  }
  render(){
    const { item } = this.props;
    console.log(item, this.props);
    return(
      <li key={item.id} className="list-group-item" onClick={this.handleItemClick.bind(this, item)}>
        <div>
          <strong>{item.name} </strong><span className="pull-right">£{item.price}</span>
        </div>
        <div>
          <small>{item.description[0]}</small>
        </div>
      </li>
    )
  }
}



export default SearchResultItem;
