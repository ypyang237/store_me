import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import CustomerListing from '../components/CustomerListing/CustomerListing'


class Host extends Component {

   render() {
    return(
      <div>
        <GlobalHeader />
        <h1>Host Dashboard</h1>
        <CustomerListing />
      </div>
    )
  };
}

export default Host;
