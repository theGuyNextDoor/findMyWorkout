-- psql postgres -U timjordan < database/schema.sql
-- psql postgres -U timjordan
DROP DATABASE IF EXISTS digital_trainer;
CREATE DATABASE digital_trainer;

\c digital_trainer

CREATE TABLE users (
  id SERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  hash_password VARCHAR(50) NOT NULL
);

CREATE TABLE exercises (
  id SERIAL NOT NULL PRIMARY KEY,
  exercise_name VARCHAR(30) NOT NULL,
  body_part VARCHAR(9) NOT NULL,
  difficulty VARCHAR(12) NOT NULL,
  equipment VARCHAR(12) NOT NULL,
  exercise_description VARCHAR(300) NOT NULL,
  cosmetic VARCHAR(20) NOT NULL,
  photo VARCHAR(150) NOT NULL,
  url VARCHAR(100) NOT NULL
);

CREATE TABLE users_exercises (
  id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  exercise_id INT NOT NULL REFERENCES exercises(id)
);

CREATE INDEX idx_users_id on users(id);
CREATE INDEX idx_users_exercises_user_id on users_exercises(user_id);
CREATE INDEX idx_exercises_equipment on exercises(equipment);


COPY exercises(id, exercise_name, body_part, difficulty, equipment, exercise_description, cosmetic, photo, url)
FROM '/Users/timjordan/Documents/myProjects/findMyWorkout/database/data/exercise.csv'
DELIMITER ','
CSV HEADER;

SELECT setval('exercises_id_seq', (SELECT max(id) FROM exercises));
