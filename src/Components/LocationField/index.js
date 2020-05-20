import React from 'react';
import Geocoder from 'react-mapbox-gl-geocoder';

import './LocationField.css';

const mapAccess = { mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_KEY }

// limit location to SF (for now! :) )

const queryParams = { bbox: [-122.53954655442544, 37.68249953442441, -122.35424997862448, 37.812626342936525] }

class LocationField extends React.PureComponent {
  render() {
    const { getLocation, onSelected, viewport, cuisines } = this.props;
    return (
      <div className="user-locations">
        <div className='button-and-dropdown'>
          <button className="button"
            onClick={() => getLocation()}> Find Businesses Nearby
        </button>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Filter By Cuisine
    </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {cuisines && cuisines.map(cuisine => {
                return (
                  <a className="dropdown-item" href="#">{cuisine}</a>
                )
              })}
            </div>
          </div>
        </div>
        <div> Or, enter an address or location:
           <Geocoder className="search-results"
            {...mapAccess}
            onSelected={onSelected}
            viewport={viewport}
            hideOnSelect={true}
            queryParams={queryParams}
            updateInputOnSelect={true}
            limit={3}
          />
        </div>
      </div>
    )
  }
}


export default LocationField;