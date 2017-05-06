import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';
import StorageMap from '../components/StorageMap/StorageMap';
class Customer extends Component {


   render() {
    return(
      <div>
        <GlobalHeader />
        <h1>Customer Journey</h1>
        <StorageMap />
      </div>
    )
  };
}

export default Customer;
