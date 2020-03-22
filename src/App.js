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
          zoom: 15
      }
      this.setState({
          viewport: newViewport
      });
    });
  }

  onSelected = (viewport, item) => {
    this.setState({viewport});
    console.log('Selected: ', item)
  }

  render(){
    return (
      <div className="app">
      <h1>
      ✨ Local Businesses Open During COVID-19 ✨
      </h1>
      <LocationField 
        getLocation={this.getLocation} 
        onSelected={this.onSelected} 
        viewport={this.state.viewport} 
      />
        <div className="map">
          <Map userViewport={this.state.viewport} />
        </div>
      </div>
    );
  }
}

export default App;
