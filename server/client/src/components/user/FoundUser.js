import React, { Component } from 'react';
import InfoMessage from '../common/InfoMessage';

class FoundUser extends Component {
  renderFoundUser(){
    if(this.props.foundUser.errorMessage){
      return(
        <InfoMessage type='danger' heading="Error:" message={this.props.foundUser.errorMessage} />
      )
    } else if (this.props.foundUser.firstName) {
      return(
        <div>
          <div className="alert alert-success">
            {this.props.foundUser.firstName} {this.props.foundUser.lastName} (<span>{this.props.foundUser.email})</span>
          </div>
          <div>
            <button onClick={this.clickFunction.bind(this)} type="button" className="btn btn-success">{this.props.btnText}</button>
          </div>
        </div>
      )
    }
  }
  clickFunction(){
    this.props.clickFunction(this.props.foundUser);
  }
  render(){
    return (
      <div>
        {this.renderFoundUser()}
      </div>
    )
  }
}

export default FoundUser;
