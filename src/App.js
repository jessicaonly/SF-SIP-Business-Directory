import React from 'react';
import './App.css';

import Map from './Map/Map';

//styling for map from mapbox
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <div className="app">
    <h1>
    CORONALOCKDOWN RESTAURANTS!!!
    </h1>
      <div className="map">
        <Map />
      </div>
    </div>
  );
}

export default App;
