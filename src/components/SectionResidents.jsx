import React from 'react';
import Resident from './Resident';
import '../stylesheets/sectionResidents.css';

const SectionResidents = ({ location }) => {

  return (

    <div className='section_residents'>
      {
        location?.residents.map(url => (
          <Resident
            url={url}
            key={url}
          />
        ))
      }
    </div>

  );

};

export default SectionResidents;