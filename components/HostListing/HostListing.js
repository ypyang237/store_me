import React, { Component } from 'react';
import { css } from 'glamor';


const listingData = [
  {
    name: 'Storage Cage 1',
    status: "Available",
    image: "../../static/images/StorageCage.png",
    capacity: "50%"
  },
  {
    name: 'Storage Cage 2',
    status: "Available",
    image: "../../static/images/Cage2.png",
    capacity: "70%"
  },
  {
    name: 'Wardrobe',
    status: "Full",
    image: "../../static/images/Wardrobe.png",
    capacity: "0%"
  },
];


// ToDo: we can add a filter for customers if we like
const customerFilter = null;

class spaceListing extends Component {

  render() {

    var listingTable = listingData.map(function(listing){
      return (
        <div>

          <div className="custProfiles">
            <div className={`${thumb}`}>
              <div className={`row`}>
                <div className="custImg">
                  <img src={listing.image}></img>
                </div>
                <div className="custText">
                  <p><span className="bold">Name:</span> {listing.name}</p>
                  <p><span className="bold">Status:</span> {listing.status}</p>
                  <p><span className="bold">Capacity:</span> {listing.capacity}</p>
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
          <h1>My Listings</h1>
          <div>
            {listingTable}
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

export default spaceListing;


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



