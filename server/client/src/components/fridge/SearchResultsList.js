import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/fridgeActions';
import { updateFridgeDate } from '../../actions/fridgeActions';

class SearchResultsList extends Component {
  handleItemClick(item, fridge){
    console.log(item, fridge, 'GOING INTO DISPATCH')
    this.props.dispatch(addItem(item, fridge)).then((res)=>{
      console.log(res);
    });
    this.props.dispatch(updateFridgeDate());
  }
  renderItems(){
    if(this.props.items){
      console.log('')
      const list = this.props.items.map((item) => {
        const fridgeItems = this.props.items;
        fridgeItems.forEach((i)=>{
          if(item.name === i.name){
          } else {
          }
        })
        return(
          <li key={item.id} className="list-group-item" onClick={this.handleItemClick.bind(this, item, this.props.fridge.foundFridge.current._id)}>
            <div>
              <strong>{item.name} </strong><span className="pull-right">£{item.price}</span>
            </div>
            <div>
              <small>{item.description[0]}</small>
            </div>
          </li>
        )
      });
      return list;
    }
  }
  render(){
    return(
      <ol className="list-group">
        {this.renderItems()}
      </ol>
    )
  }
}

function mapStateToProps(state) {
  return {
    fridge: state.fridge
  };
}

export default connect(mapStateToProps)(SearchResultsList);
