import React, { Component } from 'react';
import Router from '../Router';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

class AppContainer extends Component {
  render() {
    return (
      <Router navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })}/>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppContainer);
