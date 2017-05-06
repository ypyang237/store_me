import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup,  PropTypes as MapPropTypes, } from 'react-leaflet-universal';
// import L from 'leaflet';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// ToDo: we can add a filter for Storages if we like
const customerFilter = null;

// var mymap = L.map('mapid').setView([51.505, -0.09], 13);

const MyPopupMarker = ({ children, position }) => (
  <Marker position={position}>
    <Popup>
      <span>{children}</span>
    </Popup>
  </Marker>
);


const MyMarkersList = ({ markers }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ));
  return <div style={{ display: 'none' }}>{items}</div>;
};


class StorageMap extends Component {
  state = {
    lat: -37.8139172,
    lng: 144.9620963,
    zoom: 13,
  };

  // handleClick = () => {
  //     this.refs.map.leafletElement.locate();
  //   };

  // handleLocationFound = e => {
  //   this.setState({
  //     hasLocation: true,
  //     latlng: e.latlng,
  //   });
  // };

  render() {
    const center = [this.state.lat, this.state.lng];


    const markers = [
      { key: 'marker1', position: [-37.8053589, 144.9006315], children: 'My first popup' },
      { key: 'marker2', position: [-37.8139172,144.9620963], children: 'My second popup' },
      { key: 'marker3', position: [-37.8159695,144.9547773], children: 'My third popup' },
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

              <MyMarkersList markers={markers} />


            </Map>
        </div>
      </div>
    )
  };
}

export default StorageMap;



