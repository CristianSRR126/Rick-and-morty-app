import React from 'react';
import '../stylesheets/header.css';
import Search from './Search';
import Location from './Location';

const Header = ({ location, setSearchLocation }) => {

  return (

    <div className='header'>
      <Search
        setSearchLocation={setSearchLocation}
      />
      <Location location={location} />
    </div>

  );

};

export default Header;