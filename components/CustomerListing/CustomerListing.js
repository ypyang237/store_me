import React, { Component } from 'react';
import { css } from 'glamor';


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

          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={`${thumb} container-fluid`}>
              <div className={`row`}>

                <p className="col-md-6 ${info}">{customer.name}</p>
                <p className="col-md-6">{customer.startDate}</p>
                <p className="col-md-6">{customer.endDate}</p>
                <p className="col-md-6">{customer.totalFee}</p>
                <style jsx>
                  {`
                  p {
                  color: blue;
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
          <h2>{earning}</h2>
          <div className="customerTable">
          {customerTable}
          </div>
        </div>

      </div>
    )
  };
}

export default CustomerListing;


//* Global Styles *//
const thumb = css({
  backgroundColor: 'red',
  boxShadow: '1px 1px 3px 0 rgba(50,50,50,.3)',
  marginBottom: '30px',
  position: 'relative',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    maxWidth: '400px'
  }
});

