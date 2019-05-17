import React from 'react';

function SearchBox({ searchField, searchChange }) {
  return (
    <div>
      <input 
        type="search"
        placeholder='Search Robots'
        onChange={ searchChange }
        className='pa3 ba b--green bg-lightest-blue'
      />
    </div>
  )
}

export default SearchBox;
