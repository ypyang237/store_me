import React, { Component } from 'react';


// ToDo: we can add a filter for Storages if we like
const customerFilter = null;

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
class StorageMap extends Component {

  render() {

    return(
      <div>
        <div>
          <p >Map is below</p>
          <div id="mapid" stye={{height: '180px'}}></div>
        </div>
      </div>
    )
  };
}

export default StorageMap;
