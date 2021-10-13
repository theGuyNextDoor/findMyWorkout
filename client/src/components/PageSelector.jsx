/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './SharedContext.jsx';
import Home from './pages/Home.jsx';
import NoEquipment from './pages/NoEquipment.jsx';
import JustBands from './pages/JustBands.jsx';
import FullGym from './pages/FullGym.jsx';
import Cardio from './pages/Cardio.jsx';

const PageSelector = () => {
  const { page } = useContext(SharedContext);

  switch (page) {
    case 'no equipment':
      return <NoEquipment />;
    case 'just bands':
      return <JustBands />;
    case 'full gym':
      return <FullGym />;
    case 'cardio':
      return <Cardio />;
    default:
      return <Home />;
  }
};

export default PageSelector;
