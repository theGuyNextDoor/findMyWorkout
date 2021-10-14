/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import { SharedContext } from '../SharedContext.jsx';
import Image from './Image.jsx';
import { ExerciseWrapper } from '../../../public/styles.jsx';

const LowerBody = ({ exercises }) => {
  const { highlightLowerExercise, setHighlightLowerExercise } = useContext(SharedContext);

  const handleChange = (e) => {
    setHighlightLowerExercise(e.target.value);
  };

  const exerciseArr = exercises.map((exercise) => {
    const {
      id, exercise_name, cosmetic, difficulty, exercise_description, photo, url,
    } = exercise;

    return (
      <ExerciseWrapper key={id}>
        <h4>{exercise_name}</h4>
        <Image image={photo} />
        <span>Area of focus: {cosmetic}</span>
        <span>Level of difficulty: {difficulty}</span>
        <span>{exercise_description}</span>
        <span><a href={url} rel="noreferrer" target="_blank">See how it&#39;s done</a></span>
      </ExerciseWrapper>
    );
  });

  const exerciseNameArr = exercises.map((exercise, index) => {
    const { id, exercise_name } = exercise;
    return (
      <option key={id} value={index}>{exercise_name}</option>
    );
  });
  const isThere = () => {
    if (highlightLowerExercise) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <h3>lower body</h3>
      <select value={highlightLowerExercise} onChange={handleChange}>
        <option value="pick">Pick an exercise</option>
        {(exerciseNameArr.length) ? exerciseNameArr : <option value="none">none</option>}
      </select>
      {/* {exerciseArr} */}
      {isThere && exerciseArr[highlightLowerExercise]}
    </div>
  );
};

export default LowerBody;
