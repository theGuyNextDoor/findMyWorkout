/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SharedContext } from './SharedContext.jsx';
import { Wrapper, HeaderContainer, InfoContainer, Body } from '../../public/styles.jsx';
import PageSelector from './PageSelector.jsx';

const App = () => {
  const [page, setPage] = useState('');
  const [none, setNone] = useState([]);
  const [bands, setBands] = useState([]);
  const [full, setFull] = useState([]);
  const [cardio, setCardio] = useState([]);

  useEffect(() => {
    axios.get('/none')
      .then(({ data }) => {
        setNone(data[0].exercise);
        axios.get('/bands')
          .then(({ data }) => {
            setBands(data[0].exercise);
            axios.get('/full')
              .then(({ data }) => {
                setFull(data[0].exercise);
                axios.get('/cardio')
                  .then(({ data }) => {
                    setCardio(data[0].exercise);
                  });
              });
          });
      });
  }, []);

  return (
    <Wrapper>
      <SharedContext.Provider value={{ page, setPage, none, bands, full, cardio }}>
        <HeaderContainer>
          <h1>find my workout</h1>
          <InfoContainer>
            <span onClick={() => setPage('home')}>home</span>
            <span> | </span>
            <span onClick={() => setPage('none')}>no equipment</span>
            <span> | </span>
            <span onClick={() => setPage('bands')}>just bands</span>
            <span> | </span>
            <span onClick={() => setPage('full')}>full gym</span>
            <span> | </span>
            <span onClick={() => setPage('cardio')}>cardio</span>
          </InfoContainer>
        </HeaderContainer>
        <Body>
          <PageSelector />
        </Body>
      </SharedContext.Provider>
    </Wrapper>
  );
};

export default App;
