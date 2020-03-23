import React, {PureComponent} from 'react';
import { Marker } from 'react-map-gl';

import './Pins.css';

import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient
} from "mongodb-stitch-browser-sdk";

import pinIcon from "../../assets/map-marker.svg";

class Pins extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      pins: []
    }
  }

  componentDidMount() {
    this.client = Stitch.initializeDefaultAppClient(process.env.REACT_APP_STITCH_CLIENT);
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    this.db = mongodb.db("sf-covid19-businesses");
    this.displayPinsOnLoad();
  }

   displayPins = () => {
    // query the remote DB and update the component state
    this.db
      .collection("sf-restaurants")
      .find({}, { limit: 100 })
      .asArray()
      .then(pins => {
        this.setState({pins});
      });
   }

  displayPinsOnLoad() {
    // Anonymously log in and display pins on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayPins)
      .catch(console.error);
  }


  render() {
    const {onClick} = this.props;
    return (
    this.state.pins.map(
      resto => 
        <Marker 
          className="restaurant-pin" 
          key={resto.name} 
          longitude={resto.longitude} 
          latitude={resto.latitude}
        > 
          <img 
            src={pinIcon}
            height="50" 
            alt="map pin" 
            onClick={() => onClick(resto)}
          /> 
        </Marker>
    )
  )
  }
}

export default Pins;