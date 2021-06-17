-- notes for database  SEMICOLONS ARE ESSENTIAL

-- login to postgres superUser
--  psql -U postgres

-- create database:
-- CREATE DATABASE pernstack;

-- CAT FILE + LOAD ALL CREATORS TO PG DATABASE

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);