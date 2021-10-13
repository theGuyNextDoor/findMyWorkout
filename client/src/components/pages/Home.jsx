/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { HomeWrapper, EquipmentContainer } from '../../../public/styles.jsx';

const Home = () =>{
  const { setPage } = useContext(SharedContext);

  return (
    <HomeWrapper>
      <h2>Home</h2>
      <EquipmentContainer>
        <h3 onClick={() => setPage('no equipment')}>no equipment</h3>
        <h3 onClick={() => setPage('just bands')}>just bands</h3>
        <h3 onClick={() => setPage('full gym')}>full gym</h3>
        <h3 onClick={() => setPage('cardio')}>cardio</h3>
      </EquipmentContainer>
    </HomeWrapper>
  );
};

export default Home;
