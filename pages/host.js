import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import CustomerListing from '../components/CustomerListing/CustomerListing'


class Host extends Component {

   render() {
    return(
      <div>
        <GlobalHeader />
        <CustomerListing />
      </div>
    )
  };
}

export default Host;
