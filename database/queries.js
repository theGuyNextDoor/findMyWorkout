module.exports = {
  selectGymExercises: `
    WITH gym AS
      (SELECT equipment, json_agg( json_build_object(
        'id', id,
        'exercise_name', exercise_name,
        'body_part', body_part,
        'difficulty', difficulty,
        'exercise_description', exercise_description,
        'cosmetic', cosmetic,
        'photo', photo,
        'url', url
      )) AS exercise
      FROM exercises
      WHERE equipment = $1
      GROUP BY equipment
      ) SELECT * FROM gym;
  `,
};
