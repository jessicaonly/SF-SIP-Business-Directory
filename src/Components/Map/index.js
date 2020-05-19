import React from 'react';
import MapGL, { GeolocateControl, Popup, Marker } from 'react-map-gl';

import Restaurants from '../../data/restos.json'
import Pins from '../Pins';
import RestaurantCard from '../RestaurantCard';

import './Map.css'
import userPinIcon from '../../assets/user-marker.svg';

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 37.77,
      longitude: -122.43,
      zoom: 13,
      bearing: 0,
      pitch: 0
    },
    popupInfo: null,
    userLocation: []
  }

  businessMap = React.createRef();

  componentDidUpdate(prevProps) {
    if (this.props.userViewport !== prevProps.userViewport) {
      this.setState({ viewport: this.props.userViewport });
    }
    if (this.props.userLocation !== prevProps.userLocation) {
      this.setState({ userLocation: this.props.userLocation });
    }
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  onClickMarker = resto => {
    this.setState({ popupInfo: resto });
  }

  renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <RestaurantCard restaurant={popupInfo} />
        </Popup>
      )
    )
  }

  render() {
    const { viewport, userLocation } = this.state;
    const { setNearbyPlaces } = this.props;
    return (
      <div className="map" ref={(mapElement) => this.mapElement = mapElement}>
        <MapGL
          {...viewport}
          width="95%"
          height="100%"
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          mapStyle="mapbox://styles/jessicaonly/ck7zovsz60mfc1ims2ky8xspc"
        >
          <Pins data={Restaurants} onClick={this.onClickMarker} setNearbyPlaces={setNearbyPlaces} />
          {this.renderPopup()}
          {userLocation.length !== 0 &&
            <Marker
              className="user-marker"
              longitude={userLocation[0]}
              latitude={userLocation[1]}
            >
              <img
                src={userPinIcon}
                height={50}
                alt="user pin icon"
              />
            </Marker>
          }
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


