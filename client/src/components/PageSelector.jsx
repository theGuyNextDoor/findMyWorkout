/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './SharedContext.jsx';
import Home from './pages/Home.jsx';
import NoEquipment from './pages/NoEquipment.jsx';
import MinimalEquipment from './pages/MinimalEquipment.jsx';
import FullGym from './pages/FullGym.jsx';

const PageSelector = () => {
  const { page } = useContext(SharedContext);

  switch (page) {
    case 'no equipment':
      return <NoEquipment />;
    case 'minimal equipment':
      return <MinimalEquipment />;
    case 'full gym':
      return <FullGym />;
    default:
      return <Home />;
  }
};

export default PageSelector;
