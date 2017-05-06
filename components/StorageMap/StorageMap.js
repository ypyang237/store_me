import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup,  PropTypes as MapPropTypes, } from 'react-leaflet-universal';
import Router from 'next/router';
// import L from 'leaflet';

// L.Icon.Default.imagePath = '.';
// // OR
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });


// ToDo: we can add a filter for Storages if we like
const customerFilter = null;

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

const MyMarkersList = ({ markers, that }) => {
    console.log('props', that)
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} that={that} {...props} />
  ));

  return <div style={{ display: 'none' }}>{items}</div>;
};

const MyPopupMarker = ({ children, position, that }) => (
  <Marker position={position} onClick={that.handleClick}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);




class StorageMap extends Component {
  state = {
    lat: -37.8139172,
    lng: 144.9620963,
    zoom: 13,
  };

  handleClick = () => {
    console.log('clidked!!')
    Router.push('/host')
      // this.refs.map.leafletElement.locate();
    };

  // handleLocationFound = e => {
  //   this.setState({
  //     hasLocation: true,
  //     latlng: e.latlng,
  //   });
  // };

  render() {
    const center = [this.state.lat, this.state.lng];

    const markers = [
      { key: 'marker1', position: [-37.817221,144.9658794], children: 'My first popup' },
      { key: 'marker2', position: [-37.8139172,144.9620963], children: 'My second popup' },
      { key: 'marker3', position: [-37.8182711,144.9648731], children: 'My third popup' },
    ];

    return(
      <div>
        <div>
          <style jsx>
            {`
            .leafletContainer {
              height: 400px;
              width: 80%;
              margin: 0 auto;
              backgroundColor: red;
            }
            `}
          </style>
          <p >Map is below</p>
            <Map
              style={{height: '400px', width: '80%', margin: '0 auto', }}
              className="leafletContainer"
              center={center}
              zoom={this.state.zoom}
              ref="map"
            >
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />

              <MyMarkersList markers={markers} that={this}/>


            </Map>
        </div>
      </div>
    )
  };
}

export default StorageMap;



