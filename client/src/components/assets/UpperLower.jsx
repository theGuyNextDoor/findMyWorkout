/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import Image from './Image.jsx';
import { ExerciseWrapper } from '../../../public/styles.jsx';

const UpperLower = ({ text, exercises }) => {
  console.log('Here are the exercises', exercises); // DELETE

  const exerciseNameArr = exercises.map((exercise) => {
    const {exercise_name, id} = exercise;
    return (
      <option key={id} value={exercise_name}>{exercise_name}</option>
    );
  });

  const exerciseArr = exercises.map((exercise) => {
    const {
      id, exercise_name, cosmetic, difficulty, exercise_description, photo, url,
    } = exercise;

    return (
      <ExerciseWrapper key={id}>
        <span>{exercise_name}</span>
        <span>Area of focus: {cosmetic}</span>
        <span>Level of difficulty: {difficulty}</span>
        <span>{exercise_description}</span>
        <span><a href={url} rel="noreferrer" target="_blank">See how it&#39;s done</a></span>
        <Image image={photo} />
      </ExerciseWrapper>
    );
  });

  return (
    <div>
      <h3>{text}</h3>
      <select>
        {(exerciseNameArr.length) ? exerciseNameArr : <option value="none">none</option>}
      </select>
      {exerciseArr}
    </div>
  );
};

export default UpperLower;
