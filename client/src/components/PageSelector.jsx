/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './SharedContext.jsx';
import Home from './pages/Home.jsx';
import NoEquipment from './pages/NoEquipment.jsx';
import MinimalEquipment from './pages/MinimalEquipment.jsx';
import Equipment from './pages/Equipment.jsx';

const PageSelector = () => {
  const { page } = useContext(SharedContext);

  switch (page) {
    case 'no equipment':
      return <NoEquipment />;
    case 'minimal equipment':
      return <MinimalEquipment />;
    case 'equipment':
      return <Equipment />;
    default:
      return <Home />;
  }
};

export default PageSelector;
