import React, {Component} from 'react';
import { connect } from 'react-redux';

import { returnItems } from '../../actions/itemActions';

class ItemSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  onSubmit(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(returnItems(this.state.item));
  }
  render(){
    return(
      <form onSubmit={this.onSubmit} className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for items"
            name="item"
            onChange={this.onChange}
            id="srch-term" />
          <div className="input-group-btn">
              <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
          </div>
      </form>
    )
  }
}

export default connect()(ItemSearchBar);
