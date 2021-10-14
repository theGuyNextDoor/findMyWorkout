/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { HomeWrapper, PageContainer } from '../../../public/styles.jsx';
import { noneImg, bandsImg, equipmentImg, cardioImg } from '../../../public/images.js';
import Image from '../assets/Image.jsx';
import SearchBar from '../assets/SearchBar.jsx';

const Home = () => (
  <HomeWrapper>
    <h2>home</h2>
    <SearchBar />
    <PageContainer>
      <Image text={'none'} image={noneImg} />
      <Image text={'bands'} image={bandsImg} />
    </PageContainer>
    <PageContainer>
      <Image text={'full'} image={equipmentImg} />
      <Image text={'cardio'} image={cardioImg} />
    </PageContainer>
  </HomeWrapper>
);

export default Home;
