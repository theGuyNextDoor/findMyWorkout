/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React, { useContext, useEffect } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import Image from './Image.jsx';
import { ExerciseWrapper } from '../../../public/styles.jsx';

const UpperLower = ({ text, exercises }) => {
  const { highlightExercise, setHighlightExercise } = useContext(SharedContext);

  const handleChange = (e) => {
    console.log(e.target.value);
    setHighlightExercise(e.target.value);
  };

  const exerciseArr = exercises.map((exercise) => {
    const {
      id, exercise_name, cosmetic, difficulty, exercise_description, photo, url,
    } = exercise;

    return (
      <ExerciseWrapper key={id}>
        <span>{exercise_name}</span>
        <Image image={photo} />
        <span>Area of focus: {cosmetic}</span>
        <span>Level of difficulty: {difficulty}</span>
        <span>{exercise_description}</span>
        <span><a href={url} rel="noreferrer" target="_blank">See how it&#39;s done</a></span>
      </ExerciseWrapper>
    );
  });

  const exerciseNameArr = exercises.map((exercise, index) => {
    const { id, exercise_name} = exercise;
    return (
      <option key={id} value={index}>{exercise_name}</option>
    );
  });
  const isThere = () => {
    if (highlightExercise) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h3>{text}</h3>
      <select value={highlightExercise} onChange={handleChange}>
        <option value="pick">Pick an exercise</option>
        {(exerciseNameArr.length) ? exerciseNameArr : <option value="none">none</option>}
      </select>
      {/* {exerciseArr} */}
      {isThere && exerciseArr[highlightExercise]}
    </div>
  );
};

export default UpperLower;
