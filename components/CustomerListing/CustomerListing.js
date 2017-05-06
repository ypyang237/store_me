import React, { Component } from 'react';
import { css } from 'glamor';


const customerData = [
  {
    name: 'Tom Banks',
    startDate: "1 April 2017",
    endDate: "1 July 2017",
    storageVolume: "1m x 1m x 1m",
    image: "../../static/images/Tom.png",
    totalFee: 90
  },
  {
    name: 'Jane Spacey',
    startDate: "5 March 2017",
    endDate: "9 October 2017",
    storageVolume: "1m x 1m x 1m",
    image: "../../static/images/Jane.png",
    totalFee: 210
  },
  {
    name: 'Claire Keys',
    startDate: "1 January 2017",
    endDate: "30 June 2017",
    storageVolume: "1m x 1m x 1m",
    image: "../../static/images/Claire.png",
    totalFee: 180
  },
  {
    name: 'Jack Treasure',
    startDate: "2 February 2017",
    endDate: "10 October 2017",
    storageVolume: "1m x 1m x 1m",
    image: "../../static/images/Jack.png",
    totalFee: 155
  },
];


// ToDo: we can add a filter for customers if we like
const customerFilter = null;

class CustomerListing extends Component {

  render() {

    var earning = 0;

    var customerTable = customerData.map(function(customer){
      earning += customer.totalFee;

      return (
        <div>

          <div className="custProfiles">
            <div className={`${thumb}`}>
              <div className={`row`}>
                <div className="custImg">
                  <img src={customer.image}></img>
                </div>
                <div className="custText">
                  <p><span className="bold">Name:</span> {customer.name}</p>
                  <p><span className="bold">Start Date:</span> {customer.startDate}</p>
                  <p><span className="bold">End Date:</span> {customer.endDate}</p>
                  <p><span className="bold">Storage Volume:</span> {customer.storageVolume}</p>
                  <p><span className="bold">Total Fee:</span> ${customer.totalFee}</p>
                </div>
                <style jsx>
                  {`
                    p {
                      color: hsl(0,0%,10%);
                      padding-bottom: 5px;
                      font-size: 16px;
                    }

                    img {
                      padding-left: 10px;
                      margin-top: 10px;
                      height: 100px;
                      border-radius: 5px;
                    }

                    .row {
                      margin-left: 10px;
                      margin-top: 15px;
                      display: flex;
                    }

                    .custImg {
                      width: 200px;
                    }

                    .custText {
                      margin-top: 10px;
                      margin-bottom: 10px;
                    }

                    .bold {
                      font-weight: bold;
                    }

                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div >
        <div>
          <h1>My Dashboard</h1>
          <h2>Total Earnings: ${earning}</h2>
          <div className="customerTable">
            {customerTable}
          </div>
          <style jsx>
            {`
              h1 {
                padding-top: 35px;
                text-align: center;
              }

              h2 {
                padding-top: 15px;
                padding-bottom: 20px;
                text-align: center;
              }
            `}
          </style>
        </div>

      </div>
    )
  };
}

export default CustomerListing;


//* Global Styles *//
const thumb = css({
  margin: '0 auto',
  width: '600px',
  backgroundColor: 'hsl(0,0%,95%)',
  boxShadow: '1px 1px 3px 0 rgba(50,50,50,.3)',
  marginBottom: '30px',
  borderRadius: '5px',
  position: 'relative',
  alignItems: 'center'
});



