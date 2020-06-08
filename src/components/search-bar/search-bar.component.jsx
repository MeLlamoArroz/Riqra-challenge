import React from 'react';
import { SearchBarInput } from './search-bar.styles';

const handleChange = (e, setSearchBar) => {
  setSearchBar(e.target.value)
}

const SearchBar = ({ setSearchBar }) => {
  return (
    <SearchBarInput
      onChange={() => handleChange(event, setSearchBar)}
    />
  )
}

export default SearchBar;