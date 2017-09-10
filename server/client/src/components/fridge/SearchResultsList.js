import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/fridgeActions';
// import { updateFridge } from '../../actions/fridgeActions'; TODO: make this work

class SearchResultsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: this.props.fridge.current.items
    }
  }
  handleItemClick(item, fridge){
    this.props.dispatch(addItem(item, fridge));
    // this.props.dispatch(updateFridge(fridge)); TODO: make this work
  }
  checkFridge(item){
    console.log('hi');
    console.log('from checkFridge', item);
  }
  renderItems(){
    if(this.props.items){
      const list = this.props.items.map((item) => {
        const fridgeItems = this.state.items;
        fridgeItems.forEach((i)=>{
          if(item.name == i.name){
            console.log('match!');  // TODO: Make list item own component with state/props etc
          } else {
          }
        })
        return(
          <li key={item.id} className="list-group-item" onClick={this.handleItemClick.bind(this, item, this.props.fridge)}>
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
