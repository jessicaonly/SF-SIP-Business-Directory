import React from 'react';


class LocationField extends React.PureComponent {
  render(){
    const { getLocation } = this.props;
    return (
      <button className="button" onClick={() => getLocation()}> Find Businesses Nearby </button>
    )
  }
}


export default LocationField;