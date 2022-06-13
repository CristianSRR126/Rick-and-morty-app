import React from 'react';
import Header from './Header';
import Main from './Main';
import '../stylesheets/container.css';

const Container = ({ location, setSearchLocation }) => {

  return (

    <div className='container'>
      <Header
        location={location}
        setSearchLocation={setSearchLocation}
      />
      <Main location={location} />
    </div>

  );

};

export default Container;