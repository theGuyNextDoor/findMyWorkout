-- psql postgres -U timjordan < reviews/database/schema.sql;
DROP DATABASE IF EXISTS find_my_workout;
CREATE DATABASE find_my_workout;

\c find_my_workout

CREATE TABLE user (
  id SERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  username VARCHAR(50) NOT NULL,
  hash_password VARCHAR(50) NOT NULL
);

CREATE TABLE exercise (
  id SERIAL NOT NULL PRIMARY KEY,
  exercise_name VARCHAR(30) NOT NULL,
  exercise_description VARCHAR(50) NOT NULL,
  body_part VARCHAR(20) NOT NULL,
  specifics VARCHAR(20) NOT NULL,
  cosmetic INT NOT NULL,
  photo VARCHAR(100) NOT NULL,
  url VARCHAR(100) NOT NULL,
);

CREATE TABLE user_exercise (
  id SERIAL NOT NULL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id),
  exercise_id INT NOT NULL REFERENCES exercise(id)
);

CREATE INDEX idx_user_id on users(id);
CREATE INDEX user_exercise_user_id on user_exercise(user_id)


-- SELECT setval('exercise_id_seq', (SELECT max(id) from exercise) + 1);
