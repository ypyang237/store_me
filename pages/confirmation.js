import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';

class Confirmation extends Component {

   render() {
    return(
      <div>
        <GlobalHeader />
        <h1>Confirm Your Booking</h1>
        <div className="form">
          <h2>Storage at 570 Bourke Street</h2>
          <img src="../static/images/StorageCage.png"></img>
          <h3>Size Available: 1m x 1m x1m </h3>
        </div>
      </div>
    )
  };
}

export default Confirmation;
