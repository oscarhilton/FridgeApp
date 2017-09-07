import React from 'react';

const InfoMessage = (props) {
  return(
    <div className="alert alert-info">
      <strong>{this.props.bold}</strong> {this.props.message}
    </div>
  )
}

export default InfoMessage;
