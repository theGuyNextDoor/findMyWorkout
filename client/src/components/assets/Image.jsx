/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import { HomeImageHolder, ImageHolder } from '../../../public/styles.jsx';

const Image = ({ text, image }) => {
  const { setPage } = useContext(SharedContext);

  if (text) {
    return <HomeImageHolder src={image} alt="image of equipment" onClick={() => setPage(text)} />;
  }
  return <ImageHolder src={image} />;
};

export default Image;
