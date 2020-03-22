import React from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';

import './LocationField.css';

const mapAccess = { mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY }

// limit location to SF (for now! :) )

const queryParams = {bbox: [-122.53954655442544,37.68249953442441,-122.35424997862448,37.812626342936525]}

class LocationField extends React.PureComponent {

  render(){
    const { getLocation, onSelected, viewport } = this.props;
    return (
      <div className="user-locations">
        <button className="button" 
          onClick={() => getLocation()}> Find Businesses Nearby 
        </button>
        <div> Or, enter an address or location:
           <Geocoder className="search-results"
            {...mapAccess} 
            onSelected={onSelected} 
            viewport={viewport} 
            hideOnSelect={true} 
            queryParams={queryParams} 
            updateInputOnSelect={false}
            limit={1}
          />
        </div>
      </div>
    )
  }
}


export default LocationField;