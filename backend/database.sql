-- notes for database  SEMICOLONS ARE ESSENTIAL

-- login to postgres superUser
--  psql -U postgres

-- create database:
CREATE DATABASE pernstack;

CREATE TABLE todo (
  todo_id SERIAL PRIMARY KEY,
  description VARCHAR(255)
);