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
      viewport: {}
    }
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          zoom: 14.5
      }
      this.setState({
          viewport: newViewport
      });
    });
    console.log(this.state);
  }

  render(){
    return (
      <div className="app">
      <h1>
      ✨ Local Businesses Open During COVID-19 ✨
      </h1>
      <LocationField getLocation={this.getLocation} />
        <div className="map">
          <Map userViewport={this.state.viewport} />
        </div>
      </div>
    );
  }
}

export default App;
