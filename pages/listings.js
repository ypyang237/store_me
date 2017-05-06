import React, { Component } from 'react';
import HostListing from '../components/HostListing/HostListing'
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';


class Listing extends Component {

   render() {
    return(
      <div>
        <GlobalHeader />
        <HostListing />
      </div>
    )
  };
}

export default Listing;
