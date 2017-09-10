import React, {Component} from 'react';

import ContentsItem from './ContentsItem';

class ContentsList extends Component {
  componentWillReceiveProps(newProps){
    console.log('newProps', newProps);
  }
  renderContents(){
    const list = this.props.contents.map((item) => {
      return(
        <li key={item._id} className="list-group-item">
          <ContentsItem details={item} />
        </li>
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
