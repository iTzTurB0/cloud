// GoogleMap.js
import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const GoogleMap = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{
        lat: 40.712776,
        lng: -74.005974,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_HERE',
})(GoogleMap);
