import React from 'react';
import './App.css';

import Map from './Map/Map';

//styling for map from mapbox
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
