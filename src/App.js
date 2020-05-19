import React from 'react';
import './App.css';

import Map from './Components/Map/Map';
import LocationField from './Components/LocationField/LocationField';

//styling for map from mapbox
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {},
      userLocation: [],
      nearbyPlaces: []
    }
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 17
      }
      this.setState({
        viewport: newViewport,
        userLocation: [newViewport.longitude, newViewport.latitude]
      });
    });
  }

  onSelected = (viewport, item) => {
    this.setState({ viewport, userLocation: item.center });
  }

  getNearbyPlaces = (places) => {
    this.setState({nearbyPlaces: places})
  }

  render() {
    const { viewport, userLocation } = this.state;
    return (
      <div className="app">
        <h1>
          <span role="img" aria-label="sparkle-emoji">✨</span> Local Businesses Open During COVID-19  <span role="img" aria-label="sparkle-emoji">✨</span>
        </h1>
        <div className='google-form'>
          If you have or know of a business to add to this database, please use <a href='https://forms.gle/4mz94Wooy9eaQnEV8'>this</a> form to let us know about it! Thank you!
        </div>
        <LocationField
          getLocation={this.getLocation}
          onSelected={this.onSelected}
          viewport={this.state.viewport}
        />
        <div className="map">
          <Map userViewport={viewport} userLocation={userLocation} setNearbyPlaces={this.getNearbyPlaces} />
        </div>
      </div>
    );
  }
}

export default App;
