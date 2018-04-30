import React, { Component } from 'react';
import { connect } from 'react-redux';

class FutureBalanceDisplayer extends Component {
  render() {
    return (
      <div className='balance-displayer'>
        { this.props.balanceChange + ' - ' + this.props.balanceChangeDescription }
        <br />
        { parseInt(this.props.futureBalance) + parseInt(this.props.balanceChange)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    futureBalance: state.balance.future,
    balanceChange: state.balanceChange.amount,
    balanceChangeDescription: state.balanceChange.description
  }
}

export default connect(mapStateToProps)(FutureBalanceDisplayer);