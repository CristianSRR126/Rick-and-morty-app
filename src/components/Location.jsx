import React from 'react';
import '../stylesheets/location.css';

const Location = ({ location }) => {

  return (

    <div className='container_location'>
      <div className='location'>
        <h1>{location?.name}</h1>
        <ul className='list'>
          <li><b>Type:</b> <span>{location?.type}</span></li>
          <li><b>Dimension:</b> <span>{location?.dimension}</span></li>
          <li><b>Population: </b><span>{location?.residents.length}</span></li>
        </ul>
      </div>
    </div>

  );

};

export default Location;