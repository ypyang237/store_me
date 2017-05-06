import React, { Component } from 'react';
import CustomerListing from '../components/CustomerListing/CustomerListing'


class Host extends Component {

   render() {
    return(
      <div>
        <h1>Host Dashboard</h1>
        <CustomerListing />
      </div>
    )
  };
}

export default Host;
