import React from 'react';
import './App.css';

import Map from './Components/Map/Map';
import LocationField from './Components/LocationField/LocationField';

//styling for map from mapbox
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      viewport: {},
      userLocation: []
    }
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 15
      }
      this.setState({
          viewport: newViewport,
          userLocation: [newViewport.longitude, newViewport.latitude]
      });
    });
  }

  onSelected = (viewport, item) => {
    this.setState({viewport, userLocation: item.center});
  }

  render(){
    const { viewport, userLocation } = this.state;
    return (
      <div className="app">
      <h1>
      <span role="img" aria-label="sparkle-emoji">✨</span> Local Businesses Open During COVID-19  <span role="img" aria-label="sparkle-emoji">✨</span> 
      </h1>
      <LocationField 
        getLocation={this.getLocation} 
        onSelected={this.onSelected} 
        viewport={this.state.viewport} 
      />
        <div className="map">
          <Map userViewport={viewport} userLocation={userLocation} />
        </div>
      </div>
    );
  }
}

export default App;
