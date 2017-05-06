import React, { Component } from 'react';
import HostListing from '../components/HostListing/HostListing'


class Listing extends Component {

   render() {
    return(
      <div>
        <h1>My Listings</h1>
        <HostListing />
      </div>
    )
  };
}

export default Listing;
