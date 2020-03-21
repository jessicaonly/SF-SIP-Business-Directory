import React, {PureComponent} from 'react';
import { Marker } from 'react-map-gl';

import './Pins.css';

import pinIcon from "../assets/map-marker.svg";

class Pins extends PureComponent {
  render() {
    const height = 20;
    const {data, onClick} = this.props;
    return (
    data.map(
      resto => <Marker className="restaurant-pin" key={resto.name} longitude={resto.longitude} latitude={resto.latitude}> <img src={pinIcon} height="50" alt="map pin" onClick={() => onClick(resto)}/> </Marker>
    )
  )
  }
}

export default Pins;