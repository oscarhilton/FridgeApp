import React, {Component} from 'react';
import { connect } from 'react-redux';

import { setReminder } from '../../actions/fridgeActions';

class ContentsItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      hasReminder: this.props.details.reminder.hasReminder,
      warning: null,
      reminderDifference: null
    }
  }
  componentDidMount(){
    this.handleReminder(this.props.details.dateAdded, this.props.details.reminder.reminderTimer);
  }
  handleReminder(itemCreated, reminder){
    if(this.state.hasReminder){
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
    } else {
      this.setState({
        warning: 'info'
      })
    }

  }
  setReminder(message){
    this.props.dispatch(setReminder(this.props.details._id, this.props.details.belongsTo))
  }
  render(){
    return(
      <div>
          <div>
            <strong>{this.props.details.name}</strong>
            <span className={`pull-right label label-${this.state.warning}`}>added {this.props.details.formattedDateAdded}</span>
          </div>
          <div>
            <button onClick={this.setReminder.bind(this)} type="button" className="btn btn-secondary btn-sm">Set reminder</button>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fridge: state.fridge
  };
}

export default connect(mapStateToProps)(ContentsItem);
