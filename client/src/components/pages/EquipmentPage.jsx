/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { EquipmentWrapper, EquipmentContainer } from '../../../public/styles.jsx';
import UpperLower from '../assets/UpperLower.jsx';

const NoEquipment = ({ title, gym }) => {
  const upper = [];
  const lower = [];

  gym.forEach((exercise) => {
    if (exercise.body_part === 'upper') {
      upper.push(exercise);
    } else {
      lower.push(exercise);
    }
  });

  return (
    <EquipmentWrapper>
      <h2>{title}</h2>
      <EquipmentContainer>
        <UpperLower text={'upper'} exercises={upper} />
        <UpperLower text={'lower'} exercises={lower} />
      </EquipmentContainer>
    </EquipmentWrapper>
  );
};

export default NoEquipment;
