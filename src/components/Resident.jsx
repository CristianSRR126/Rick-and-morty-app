import React from 'react';
import useResidents from '../hooks/useResidents';
import '../stylesheets/resident.css';

const Resident = ({ url }) => {

  const residents = useResidents(url);

  return (

    <article className='resident'>
      <img src={residents?.image} alt={residents?.name} />
      <h1>{residents?.name}</h1>
      <ul>
        <li><b>species: </b><span>{residents?.species}</span></li>
        <li><b>origin: </b><span>{residents?.origin.name}</span></li>
        <li><b>episode: </b><span>{residents?.episode.length}</span></li>
      </ul>
      <span className='status'><span className={residents?.status}></span>{residents?.status}</span>
    </article>

  );

};

export default Resident;