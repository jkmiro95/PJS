import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBalance} from "./actions";

class BalanceSetter extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let input = this.refs.input;
    event.preventDefault();
    this.props.dispatch(setBalance(input.value))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="balance-setter balance-setter-current">
        <label htmlFor="balance">Ile hajsu ma?</label>
        <input ref="input" type="number" id="balance" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state, dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, setBalance), dispatch),
    currentBalance: state.balance.current
  }
}

export default connect(mapStateToProps)(BalanceSetter);