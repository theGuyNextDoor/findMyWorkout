/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';

const SearchBar = () => (
  <form>
    <label>
      find an exercise:
      <input type="text" name="name" />
    </label>
    <input type="submit" value="Search" />
  </form>
);

export default SearchBar;
