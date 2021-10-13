/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { SharedContext } from './Context.jsx';
import PageSelector from './PageSelector.jsx';
import { Header } from '../../public/styles.jsx';

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div>
      <SharedContext.Provider value={{ page, setPage }}>
        <div>
          <Header>
            <h1>Find My Workout!</h1>
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
