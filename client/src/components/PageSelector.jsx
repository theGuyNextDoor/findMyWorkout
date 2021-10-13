/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './SharedContext.jsx';
import Home from './gyms/Home.jsx';
import NoEquipment from './gyms/NoEquipment.jsx';
import MinimalEquipment from './gyms/MinimalEquipment.jsx';
import FullGym from './gyms/FullGym.jsx';
import Arms from './muscles/Arms.jsx';
// import Chest from './muscles/Chest.jsx';

const PageSelector = () => {
  const { page } = useContext(SharedContext);

  switch (page) {
    case 'no equipment':
      return <NoEquipment />;
    case 'minimal equipment':
      return <MinimalEquipment />;
    case 'full gym':
      return <FullGym />;
    case 'arms':
      return <Arms />;
    default:
      return <Home />;
  }
};

export default PageSelector;
