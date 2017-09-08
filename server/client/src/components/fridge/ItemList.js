import React from 'react';

const ItemList = (props) => {
  const renderItems = () => {
    if(props.items){
      const list = props.items.map((item) => {
        return(
          <li key={item.id} className="list-group-item">
            <strong>{item.name} </strong><span className="pull-right">£{item.price}</span>
          </li>
        )
      });
      return list;
    }
  };
  return(
    <ol className="list-group">
      {renderItems()}
    </ol>
  )
}

export default ItemList;
