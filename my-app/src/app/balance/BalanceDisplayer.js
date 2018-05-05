import React, { Component } from 'react';
import { connect } from 'react-redux';

class BalanceDisplayer extends Component {
  render() {
    return (
      <div className='balance-displayer'>
        <span className="label">Current balance: </span>
        <span className="value">{ this.props.currentBalance }</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentBalance: state.balance.current
  }
}

export default connect(mapStateToProps)(BalanceDisplayer);