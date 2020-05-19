import React from 'react';
import "./RestaurantCard.css";

class RestaurantCard extends React.PureComponent {
  render() {
    const { restaurant } = this.props;
    return (
      <section className="restaurant-card">
        <strong> {restaurant.name} </strong>
        <div className="cuisine"> <i> {restaurant.cuisine} </i> </div>
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