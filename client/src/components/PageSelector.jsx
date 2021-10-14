/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from './SharedContext.jsx';
import Home from './pages/Home.jsx';
import EquipmentPage from './pages/EquipmentPage.jsx';

const PageSelector = () => {
  const { page, none, bands, full, cardio } = useContext(SharedContext);

  switch (page) {
    case 'none':
      return <EquipmentPage title={'no equipment! no problem!'} gym={none} />;
    case 'bands':
      return <EquipmentPage title={'bands'} gym={bands} />;
    case 'full':
      return <EquipmentPage title={'gym equipment'} gym={full} />;
    case 'cardio':
      return <EquipmentPage title={'cardio'} gym={cardio} />;
    default:
      return <Home />;
  }
};

export default PageSelector;
