import React from 'react';

class RestaurantCard extends React.PureComponent {
  render() {
    console.log('hi');
    const { restaurant } = this.props;
    return (
      <section>
        <strong> {restaurant.name} | {''}  </strong>
        <i> {restaurant.cuisine} </i> 
        <div className="address"> <i> Address: </i> {restaurant.address} </div>
        <div className="phone-number"> <i> Phone Number: </i> {restaurant.phone_number}</div>
        <div className="hours"> <i> Hours: </i> {restaurant.hours} </div>
        <div className="services"> <i> Services: </i> {restaurant.services.join(', ')} </div>
        <div className="website">
          {restaurant.website && 
            <a
              target="_new"
              href={restaurant.website}
            >
              Website 
            </a>
          }
        </div>
      </section>
    );
  }
}


export default RestaurantCard;