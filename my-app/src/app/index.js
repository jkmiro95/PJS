import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceDisplayer from './balance/BalanceDisplayer';
import BalanceSetter from './balance/BalanceSetter';


class App extends Component {

  addSetter() {
    if (this.props.currentSet) {
      return false;
    } else {
      return <BalanceSetter />
    }
  }

  render() {
    return (
      <div className="container">
        <BalanceDisplayer />
        { this.addSetter() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSet: state.balance.currentSet
  }
}

export default connect(mapStateToProps)(App);