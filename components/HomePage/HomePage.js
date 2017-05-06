import React, { Component } from 'react';
import Router from 'next/router';

class HomePage extends Component {

   handleclick() {
    Router.push('/customer');
   }

   render() {
    return(
      <div className="homepage">
        <div className="maintext">
          <h1>Storelax</h1>
          <h2>Find convenient, reliable storage near you</h2>
          <input type="text" placeholder="Search"></input>
          <button onClick={this.handleclick}>Search</button>
        </div>
        <style jsx>
          {`
            .maintext {
              background-color: hsla(0,0%,100%,0.8);
              padding: 75px;
              padding-bottom: 85px;
              border-radius: 10px;

              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
            }

            h2 {
              font-style: italic;
              font-size: 16px;
              margin-bottom: 35px;
            }

            input {
              margin-bottom: 10px;
            }

            .homepage {
              height: 900px;
              background: url(../../static/images/background.jpg) no-repeat center center fixed;
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;

              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </div>
    )
  };
}

export default HomePage;

