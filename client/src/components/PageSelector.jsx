/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './Context.jsx';
import Home from './pages/Home.jsx';
import NoWeights from './pages/NoWeights.jsx';
import MinimalWeights from './pages/MinimalWeights.jsx';
import Weights from './pages/Weights.jsx';

const PageSelector = () => {
  const { page } = useContext(SharedContext);

  switch (page) {
    case 'no weights':
      return <NoWeights />;
    case 'minimal weights':
      return <MinimalWeights />;
    case 'weights':
      return <Weights />;
    default:
      return <Home />;
  }
};

export default PageSelector;
