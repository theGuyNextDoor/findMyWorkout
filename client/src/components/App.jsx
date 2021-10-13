/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { SharedContext } from './SharedContext.jsx';
import { Header } from '../../public/styles.jsx';
import PageSelector from './PageSelector.jsx';

const App = () => {
  const [page, setPage] = useState('');
  const [exercises, getExercises] = useState([]);

  return (
    <div>
      <SharedContext.Provider value={{ page, setPage, exercises, getExercises }}>
        <div>
          <Header>
            <h1>Find My Workout</h1>
            <span onClick={() => setPage('home')}>home</span>
            <span> | </span>
            <span onClick={() => setPage('no equipment')}>no equipment</span>
            <span> | </span>
            <span onClick={() => setPage('minimal equipment')}>minimal equipment</span>
            <span> | </span>
            <span onClick={() => setPage('full gym')}>full gym</span>
          </Header>
          <div>
            <PageSelector />
          </div>
        </div>
      </SharedContext.Provider>
    </div>
  );
};

export default App;
