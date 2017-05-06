import React, { Component } from 'react';
import GlobalHeader from '../components/GlobalHeader/GlobalHeader';

class Confirmation extends Component {

   render() {
    return(
      <div className="confirmation">
        <GlobalHeader />
        <h1>Confirm Your Booking</h1>
        <div className="form">
          <h2>Storage at 570 Bourke Street</h2>
          <img src="../static/images/StorageCage.png"></img>
          <h3>Space Available: 1m x 1m x1m </h3>
          <h3>Weekly Price: $5</h3>
          <p>Needed from:</p>
          <input type="text" value="06/06/2017" />
          <p>To:</p>
          <input type="text" value="09/09/2017" />
          <button>Confirm booking</button>
        </div>
        <style jsx>
          {`
            .form {
              display: flex;
              justify-contents: center;
              align-items: center;
              flex-direction: column;
            }

            .confirmation {
              display: flex;
              justify-contents: center;
              align-items: center;
              flex-direction: column;
            }

            p {
              margin-top: 15px;
            }

            button {
              margin-top: 15px;
            }
          `}
        </style>
      </div>
    )
  };
}

export default Confirmation;
