import React, { Component } from 'react';
import { connect } from 'react-redux';

class BalanceDisplayer extends Component {
  render() {
    return (
      <div className='balance-displayer'>
        { this.props.currentBalance }
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