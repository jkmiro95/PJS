import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBalanceChange } from "./actions";
import {bindActionCreators} from 'redux';

class FutureBalanceDisplayer extends Component {

  constructor(props) {
    super(props);

    this.showBalanceChange= this.showBalanceChange.bind(this);
    this.calculateFutureBalance = this.calculateFutureBalance.bind(this);
  }

  showBalanceChange(change) {
    return (
      <li key={change.key}>
        <span className="description">{ change.description } </span>
        <span className="value">{ change.amount }</span>
        <button className="delete" onClick={() =>
          this.props.dispatch(deleteBalanceChange(change.key))
        }>Wyjeb</button>
      </li>
    )
  }

  calculateFutureBalance(balanceChange) {
    let tempAmount = parseFloat(this.props.futureBalance);
    for (let i = 0; i < balanceChange.length; i++) {
      tempAmount += parseFloat(balanceChange[i].amount);
    }
    return tempAmount;
  }


  render() {
    let changes = this.props.balanceChange.map(this.showBalanceChange);

    let changeAmount = this.calculateFutureBalance(this.props.balanceChange);

    return (
      <div className="changes">
        <ul>
          { changes }
        </ul>
        <div className='balance-displayer-future'>
        <span className="label">
          Future balance:
        </span>
          <span className="value">
          { changeAmount }
        </span>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, deleteBalanceChange), dispatch),
    futureBalance: state.balance.future,
    balanceChange: state.balanceChange.changeArray,
  }
}

export default connect(mapStateToProps)(FutureBalanceDisplayer);