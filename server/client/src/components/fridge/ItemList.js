import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/fridgeActions';
// import { updateFridge } from '../../actions/fridgeActions'; TODO: make this work

class ItemList extends Component {
  constructor(props){
    super(props);
  }
  handleItemClick(item, fridge){
    this.props.dispatch(addItem(item, fridge));
    // this.props.dispatch(updateFridge(fridge)); TODO: make this work
  }
  renderItems(){
    if(this.props.items){
      const list = this.props.items.map((item) => {
        console.log(item);
        return(
          <li key={item.id} className="list-group-item" onClick={this.handleItemClick.bind(this, item, this.props.fridge)}>
            <div>
              <strong>{item.name} </strong><span className="pull-right">£{item.price}</span>
            </div>
            <div>
              <small>{item.description[0]}</small><small className="pull-right">{item.PromotionDescription}</small>
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

export default connect(mapStateToProps)(ItemList);
