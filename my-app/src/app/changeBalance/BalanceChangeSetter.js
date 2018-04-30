import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBalanceChange} from "./actions";

class BalanceChangeSetter extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let input = this.refs.input;
    let description = this.refs.description;
    event.preventDefault();
    this.props.dispatch(setBalanceChange(input.value, description.value))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="balance-setter">
        <label for="balance">Ile hajsu podpierdoli/przepierdoli?</label>
        <input ref="input" type="number" id="balance" />
        <label for="balance">Czemu hajsy podpierdoli/przepierdoli?</label>
        <input ref="description" type="text" id="balance" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state, dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, setBalanceChange), dispatch),
    futureBalance: state.balance.future
  }
}

export default connect(mapStateToProps)(BalanceChangeSetter);