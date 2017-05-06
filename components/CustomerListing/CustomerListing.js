import React, { Component } from 'react';
// import numeral from 'numeral';

const customerData = [
  {
    name: 'Tom Banks',
    startDate: "1 April 2017",
    endDate: "1 July 2017",
    totalFee: 90
  },
  {
    name: 'Jane Spacey',
    startDate: "5 March 2017",
    endDate: "9 October 2017",
    totalFee: 210
  },
  {
    name: 'Alice Keys',
    startDate: "1 January 2017",
    endDate: "30 June 2017",
    totalFee: 180
  },
  {
    name: 'Jack Treasure',
    startDate: "2 February 2017",
    endDate: "10 October 2017",
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
          <p>{customer.name}</p>
          <p>{customer.startDate}</p>
          <p>{customer.endDate}</p>
          <p>{customer.totalFee}</p>
        </div>
      )
    })

    return(
      <div>
        <div>
          <h2>{earning}</h2>
          <p>Customer Listings here</p>
          {customerTable}
        </div>
      </div>
    )
  };
}

export default CustomerListing;
