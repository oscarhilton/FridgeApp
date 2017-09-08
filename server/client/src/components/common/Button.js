import React, { Component } from 'react';

const Button = (props) => {
  return(
    <div>
      <button
      onClick={props.clickFunction()}
      type="button"
      className={`btn btn-${props.type}`}
      >
      {props.text}
      </button>
    </div>
  )
}

export default Button;
