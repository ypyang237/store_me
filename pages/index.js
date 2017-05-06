import React, { Component } from 'react';
// import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
// import GlobalFooter from '../components/GlobalFooter/GlobalFooter';
import HomePage from '../components/HomePage/HomePage';

class Index extends Component {
  // static getInitialProps ({ req }) {
  //   const isServer = !!req;
  //   const store = initStore(reducers, null, isServer);
  //   return { initialState: store.getState(), isServer };
  // }
  // constructor (props) {
  //   super(props);
  //   this.store = initStore(reducers, props.initialState, props.isServer);
  // }

  render() {
    return(
      <div>
        <HomePage />
      </div>
    )
  };
}

export default Index;