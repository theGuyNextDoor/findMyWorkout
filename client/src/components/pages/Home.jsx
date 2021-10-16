/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { HomeWrapper, PageContainer } from '../../../public/styles.jsx';

const Home = () =>{
  const { setPage } = useContext(SharedContext);

  return (
    <HomeWrapper>
      <h2>home</h2>
      <PageContainer>
        <h3 onClick={() => setPage('no equipment')}>no equipment</h3>
        <h3 onClick={() => setPage('just bands')}>just bands</h3>
        <h3 onClick={() => setPage('full gym')}>full gym</h3>
        <h3 onClick={() => setPage('cardio')}>cardio</h3>
      </PageContainer>
    </HomeWrapper>
  );
};

export default Home;
