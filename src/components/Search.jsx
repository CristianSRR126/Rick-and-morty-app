import React from 'react';
import '../stylesheets/search.css';

const Search = ({ setSearchLocation }) => {

  const searchForLocation = e => {
    e.preventDefault();
    setSearchLocation(e.target.children[0].value);
  };

  return (

    <div className='container_search'>
      <div className='bar_search'>
        <div className='search'>
          <form onSubmit={searchForLocation}>
            <input type='text' placeholder='Search by ID' />
            <button>
              <i className='bi bi-search'></i>
            </button>
          </form>
        </div>
      </div>
    </div>

  );

};

export default Search;