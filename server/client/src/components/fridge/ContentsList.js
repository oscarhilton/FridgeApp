import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import ContentsItem from './ContentsItem';

class ContentsList extends Component {
  renderContents(){
    const list = this.props.contents.map((item) => {
      return(
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          <li key={item._id} className="list-group-item">
            <ContentsItem details={item} />
          </li>
          </CSSTransitionGroup>
      )
    });
    return list;
  }
  render(){
    return(
      <ol className="list-group">
        {this.renderContents()}
      </ol>
    )
  }
}

export default ContentsList;
