import React, {Component} from 'react';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      reminder: '2017-10-10T21:34:14.221Z', //2017-09-09T20:43:13.633Z
      warning: 'info',
      reminderDifference: 0
    }
  }
  componentDidMount(){
    this.handleReminder(this.props.details.dateAdded, this.state.reminder);
  }
  handleReminder(itemCreated, reminder){
    itemCreated = new Date(itemCreated);
    reminder = new Date(reminder);
    var difference = reminder - itemCreated;
    var seconds = difference / 1000;
    this.setState({
      reminderDifference: seconds
    })
    if(seconds > 86400){
      this.setState({
        warning: 'success'
      })
    } else if(seconds > 0){
      this.setState({
        warning: 'warning'
      })
    } else {
      this.setState({
        warning: 'danger'
      })
    }
  }
  setReminder(message){
    console.log('hello!', message)
  }
  render(){
    return(
      <div>
        <div>
          <strong>{this.props.details.name}</strong>
          <span className={`pull-right label label-${this.state.warning}`}>added {this.props.details.formattedDateAdded}</span>
        </div>
        <div>
          <button onClick={this.setReminder.bind(this, this.props.details)} type="button" className="btn btn-secondary btn-sm">Set reminder</button>
        </div>
      </div>
    )
  }
}

export default Item;
