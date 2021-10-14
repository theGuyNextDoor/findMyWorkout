/* eslint-disable import/extensions */
import React from 'react';
import { EquipmentWrapper, EquipmentContainer, Block } from '../../../public/styles.jsx';
import UpperBody from '../assets/UpperBody.jsx';
import LowerBody from '../assets/LowerBody.jsx';

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
        <Block>
          <UpperBody exercises={upper} />
        </Block>
        <Block>
          <LowerBody exercises={lower} />
        </Block>
      </EquipmentContainer>
    </EquipmentWrapper>
  );
};

export default NoEquipment;
