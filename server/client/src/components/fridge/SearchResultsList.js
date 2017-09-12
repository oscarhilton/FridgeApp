import React, {Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';

import { addItem } from '../../actions/fridgeActions';
import { updateFridgeDate } from '../../actions/fridgeActions';

import SearchResultItem from './SearchResultItem';

class SearchResultsList extends Component {
  handleItemClick(item, fridge){
    console.log(item, fridge, 'GOING INTO DISPATCH')
    this.props.dispatch(addItem(item, fridge)).then((res)=>{
      console.log(res, '<---- RESULT OF DISPATCH');
    });
  }
  renderItems(){
    if(this.props.items){
      const {contents} = this.props
      const list = this.props.items.map((item) => {
        return(
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={0}>
              <SearchResultItem item={item} contents={contents} handleClick={this.handleItemClick.bind(this, item, this.props.fridge)}/>
          </CSSTransitionGroup>
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

export default connect()(SearchResultsList);
