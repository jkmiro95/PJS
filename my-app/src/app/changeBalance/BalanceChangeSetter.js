import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {setBalanceChange} from "./actions";

class BalanceChangeSetter extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createKey = this.createKey.bind(this);
  }

  createKey() {
    let key = Math.floor(Math.random() * 1000000000);
    const changeBalance = this.props.changeBalance;

    for (let i=0; i < changeBalance; i++) {
      if (changeBalance[i].key === key) {
        this.createKey();
      }
    }

    return key;
  }

  handleSubmit(event) {
    let input = this.refs.input;
    let description = this.refs.description;
    let key = this.createKey();
    event.preventDefault();
    this.props.dispatch(setBalanceChange(input.value, description.value, key));
    this.form.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="balance-setter" ref={ (el) => this.form = el}>
        <label htmlFor="balance">Enter amount of the balance change</label>
        <input ref="input" type="number" id="balance" />
        <label htmlFor="balance">Enter description of the balance change</label>
        <input ref="description" type="text" id="balance" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

function mapStateToProps(state, dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, setBalanceChange), dispatch),
    futureBalance: state.balance.future,
    changeBalance: state.balanceChange.changeArray
  }
}

export default connect(mapStateToProps)(BalanceChangeSetter);