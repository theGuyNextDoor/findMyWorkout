/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';

const Home = () =>{
  const { setPage } = useContext(SharedContext);

  return (
    <div>
      <h2>Home</h2>
      <h3>no equipment</h3>
      <h3>just bands</h3>
      <h3>full gym</h3>
      <h3>cardio</h3>
    </div>
  );
};

export default Home;
