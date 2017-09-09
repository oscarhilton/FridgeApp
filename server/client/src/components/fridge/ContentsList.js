import React from 'react';

const ContentsList = (props) => {
  const renderContents = () => {
    const list = props.contents.map((item) => {
      return(
        <li key={item._id} className="list-group-item">
          <strong>{item.name}</strong>
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
