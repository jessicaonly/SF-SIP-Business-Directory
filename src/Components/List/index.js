import React from 'react';

import './List.css';

class List extends React.Component {
  render(){
    const { list } = this.props;
    return (
      <div className='businesses-list'>
        {list && list.map((business, index) => {
          return (
            <div className='business-details' key={index}>
            <a href={business.website}><p>{business.name}</p></a>
            </div>
          )
        })}
      </div>
    )
  }
}


export default List;