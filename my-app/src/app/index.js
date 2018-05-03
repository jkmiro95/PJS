import React, { Component } from 'react';
import { connect } from 'react-redux';
import BalanceDisplayer from './balance/BalanceDisplayer';
import BalanceSetter from './balance/BalanceSetter';
import FutureBalanceDisplayer from './changeBalance/FutureBalanceDisplayer';
import BalanceChangeSetter from './changeBalance/BalanceChangeSetter';


class App extends Component {

  addSetter() {
    if (this.props.currentSet) {
      return (
        <div className="wrapper">
          <BalanceChangeSetter />
          <FutureBalanceDisplayer />
        </div>
      )
    } else {
      return <BalanceSetter />
    }
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="header-wrapper">
            <h1>Nazwa apki</h1>
          </div>
        </header>
        <main className="main">
          <BalanceDisplayer />
          { this.addSetter() }
        </main>
        <footer className="footer">
          &copy; Copyright czy coś tam.
        </footer>
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