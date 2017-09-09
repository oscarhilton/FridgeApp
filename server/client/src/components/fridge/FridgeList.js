import React from 'react';
import { Link } from 'react-router-dom';

const FridgeList = (props) => {
  const renderFridges = () => {
    if(props.fridge.length > 0){
      const list = props.fridge.map((fridge) => {
        const href = `/fridge/${fridge._id}`;
        return(
          <li key={fridge._id} className="list-group-item">
            <a href={ `/fridge/${fridge._id}` }>{fridge._id}</a>
          </li>
        )
      });
      return list;
    } else {
      return(
        <p>loading...</p>
      )
    }
  };
  return(
    <ol className="list-group">
      {renderFridges()}
    </ol>
  )
}

export default FridgeList;
