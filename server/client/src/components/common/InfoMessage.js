import React from 'react';

const InfoMessage = (props) => {
  return(
    <div className="alert alert-info">
      <strong>{props.heading}</strong> {props.message}
    </div>
  )
}

export default InfoMessage;
