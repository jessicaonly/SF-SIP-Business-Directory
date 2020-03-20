import React from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';

import Restaurants from '../data/restos.json' 
import Pins from '../Pins/Pins';

import './Map.css'

class Map extends React.Component {
  state = {
    viewport: {
      width: "100vh",
      height: "100vh",
      latitude: 37.77,
      longitude: -122.43,
      zoom: 11.5
    }
  }

  render() {
    const { viewport } = this.state;
    return (
      <div className="map">
        <ReactMapGL
          {...viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
          mapStyle="mapbox://styles/jessicaonly/ck7zovsz60mfc1ims2ky8xspc"
        >
          <Pins data={Restaurants} />
          <GeolocateControl
            positionOptions={{ enableHighAccurancy: true }}
            trackUserLocation={true}
          />
        </ReactMapGL>
      </div>
    )
  }
};

export default Map;