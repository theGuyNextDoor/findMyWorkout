/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { NoEquipmentWrapper } from '../../../public/styles.jsx';

const NoEquipment = () => {
  const [arms, setArms] = useState([]);
  const [chest, setChest] = useState([]);
  const [back, setBack] = useState([]);

  return (
    <NoEquipmentWrapper>
      <h2>no equipment! no problem!</h2>
      <span>lower body</span>
      <span>upper body</span>
    </NoEquipmentWrapper>
  );
};

export default NoEquipment;
