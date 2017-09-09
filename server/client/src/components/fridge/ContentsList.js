import React from 'react';

import Item from './Item';

const ContentsList = (props) => {
  const renderContents = () => {
    const list = props.contents.map((item) => {
      return(
        <li key={item._id} className="list-group-item">
          <Item details={item} />
        </li>
      )
    });
    return list;
  };
  return(
    <ol className="list-group">
      {renderContents()}
    </ol>
  )
}

export default ContentsList;
