import React from 'react';
import '../stylesheets/main.css';
import SectionResidents from './SectionResidents';

const Main = ({ location }) => {

  return (

    <section className='main'>
      <SectionResidents location={location} />
    </section>

  );

};

export default Main;