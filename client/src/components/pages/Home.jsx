/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';

const Home = () =>{
  const { setPage } = useContext(SharedContext);

  return (
    <div>
      <h2>Home</h2>
      <select id="dropdown-basic-button" title="categoty">
        <option value="upper-body">upper body</option>
        <option value="lower-body">lower body</option>
      </select>

      <select id="dropdown-basic-button" title="categoty">
        <option value="arms">arms</option>
        <option value="chest">chest</option>
        <option value="legs">legs</option>
        <option value="full Body">full body</option>
      </select>
    </div>
  );
};

export default Home;
