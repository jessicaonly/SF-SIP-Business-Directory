import React from 'react';
import ReactMapGL, {GeolocateControl} from 'react-map-gl';
import { render } from 'react-dom';


class Map extends React.Component {
  state = {
    viewport: {
      width: '100vh',
      height: '100vh',
      latitude: 37.8024,
      longitude: -122.4058,
      zoom: 12
    }
  }


  render() {
    console.log(process.env.REACT_APP_MAPBOX_KEY)
    return (
      <div className="map">
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        >
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