import React from 'react';
import MapGL, {GeolocateControl, Popup} from 'react-map-gl';

import Restaurants from '../data/restos.json' 
import Pins from '../Pins/Pins';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

import './Map.css'

class Map extends React.PureComponent {
  state = {
    viewport: {
      width: "100vh",
      height: "100vh",
      latitude: 37.77,
      longitude: -122.43,
      zoom: 13
    },
    popupInfo: null
  }

  onClickMarker = resto => {
    this.setState({popupInfo: resto});
  }

  renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
         <RestaurantCard restaurant={popupInfo} />
      </Popup>
      )
    )
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className="map">
        <MapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          mapStyle="mapbox://styles/jessicaonly/ck7zovsz60mfc1ims2ky8xspc"
        >
          <Pins data={Restaurants} onClick={this.onClickMarker} />
            {this.renderPopup()}
          <GeolocateControl
            positionOptions={{ enableHighAccurancy: true }}
            trackUserLocation={true}
          />
        </MapGL>
      </div>
    )
  }
};

export default Map;