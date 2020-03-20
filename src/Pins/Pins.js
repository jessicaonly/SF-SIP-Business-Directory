import React, {PureComponent} from 'react';
import { Marker } from 'react-map-gl';

import pinIcon from "../assets/map-marker.svg";

class Pins extends PureComponent {
  render() {
    const height = 20;
    console.log(pinIcon);
    const {data} = this.props;
    return (
    data.map(
      resto => <Marker key={resto.name} longitude={resto.longitude} latitude={resto.latitude}> <img src={pinIcon} height="50"/> </Marker>
    )
  )
  }
}

export default Pins;