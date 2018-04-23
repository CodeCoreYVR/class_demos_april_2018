-- CREATING A TABLE

-- CREATE TABLE cars (
--   id SERIAL,
--   make VARCHAR(50),
--   model VARCHAR(255),
--   doors INTEGER,
--   description TEXT
-- ); -- Always terminate SQL queries with a `;`

-- UPDATING A TABLE

-- ALTER TABLE students
--   ADD COLUMN passtimes VARCHAR(255);
-- ALTER TABLE students 
--   RENAME COLUMN passtimes TO pastimes;

-- CRUD OPERATIONS

-- CREATE

-- INSERT INTO students
--   (first_name, last_name, email, phone_number)
--   VALUES
--   ('Steve', 'Godin', 'steve@codecore.ca', '777.777.7777');

-- READ

-- SELECT * FROM students;

-- -- Only gets the columns named first_name and last_name
-- SELECT first_name, last_name
--   FROM students
--   -- Filters rows searched
--   -- This only finds rows where its "id" column is
--   -- equal 1.
--   WHERE id = 1;

-- Select all students whose ids are more than 100

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE id > 100;

-- Select all students whose ages are more than 40

-- SELECT id, first_name, age
--   FROM students
--   WHERE age > 40;

-- Select all students that have registered
-- in the last 20 days

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE date_part('day', now() - registration_date) < 20;

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date > '2018-04-02';

-- SELECT id, first_name, registration_date
--   FROM students
--   WHERE registration_date > now() - interval '20 days';

-- Variations on using interval
-- https://www.postgresql.org/docs/10/static/datatype-datetime.html

-- SELECT id, registration_date FROM students
--   WHERE registration_date > now() - interval '20D';
-- SELECT id, registration_date  FROM students
--   WHERE registration_date > now() - interval '1M20D';
-- SELECT id, registration_date  FROM students
--   WHERE registration_date > now() - interval '20' day;


-- Select all studetns whose ids are more than 100
-- and less than 120

-- SELECT id, first_name
--   FROM students
--   WHERE id > 100 AND id < 120;

-- Select all students whose ages are more than
-- 40 or less than 20

-- SELECT id, first_name, age
--   FROM students
--   WHERE age > 40 OR age < 20;

-- NULL VALUES

-- SELECT id, first_name, age
--   FROM students
--   WHERE age < 20 OR age IS NULL;

-- SELECT id, first_name, age
--   FROM students
--   WHERE age IS NULL;

-- LIKE AND ILIKE WILDCARDS

-- Find all students whose first_name begins with 'Jo'

-- SELECT id, first_name
--   FROM students
--   -- When using LIKE or ILIKE, no specifying
--   -- any % in the search pattern is the same
--   -- as using =.
--   WHERE first_name LIKE 'Jo%';

-- Find all students whose first names end with 'on' (case insensitive)

-- SELECT id, first_name
--   FROM students
--   -- ILIKE unlike LIKE ignores case.
--   -- Only works postgres.
--   WHERE first_name ILIKE '%on';

-- Select all students whose first names 
-- or last names contain 'nn'

-- SELECT id, first_name, last_name
--   FROM students
--   WHERE first_name ILIKE '%nn%'
--     OR last_name ILIKE '%nn%';

-- BETWEEN

-- Select all students whose ages are between
-- 25 and 35

-- SELECT id, first_name, age
--   FROM students
--   WHERE age BETWEEN 25 AND 35;

-- ORDERING DATA WITH ORDER BY

-- Select all students whose names begin with 'jo'
-- ordered by their last name then age

-- SELECT id, first_name, age
--   FROM students
--   WHERE first_name ILIKE 'al%'
--   ORDER BY first_name ASC, age DESC;

-- LIMITING QUERIED DATA

-- Select the first 10 students only

-- SELECT id, first_name
--   FROM students
--   LIMIT 10;

-- OFFSETTING DATA

-- Select the third set of 10 students

-- SELECT id, first_name
--  FROM students
--  OFFSET 20 LIMIT 10;

-- AGGREGATE FUNCTIONS

-- COUNT

-- Get the number of students in the database
-- SELECT count(*) FROM students;

-- Get the number of students are more than 25
-- years of age
-- SELECT count(*)
--   FROM students
--   WHERE age > 25;

-- USING AS TO ALIAS COLUMN NAMES

-- SELECT count(*) AS student_count
--   FROM students
--   WHERE age > 25;

-- SUM

-- Find out the total years life experience of
-- all the students

-- SELECT sum(age) AS total_life_experience
--   FROM students;

-- AVG & ROUND

-- Use AVG aggregate function to calculate
-- the average of all data in a column.
-- Use ROUND to a float to a certain precision.
-- Provide a second argument to specify
-- how many numbers after the decimal.

SELECT ROUND(AVG(age), 2) AS average_age
  FROM students;

--   average_age
-- -------------
--           44

-- Write a query with the maximum, minimum,
-- average and total age of all students

-- SELECT
--   MAX(age) AS maximum_age,
--   MIN(age) AS minimum_age,
--   ROUND(AVG(age), 3) AS average_age,
--   SUM(age) AS total_age
--   FROM students;

-- GROUP BY

-- Find the number of occurences of first names
-- in the students table
-- SELECT first_name, count(*) AS occurences
--   FROM students
--   GROUP BY first_name
--   ORDER BY occurences DESC;

-- UPDATING DATA

-- UPDATE students
--   SET first_name='Jon'
--   WHERE id=1;

-- SELECT * FROM students WHERE id=1;

-- UPDATE students
--   SET first_name='Jon', last_name='Snow'
--   WHERE id=1
--   -- Ending a query that mutates with RETURNING
--   -- will the data that was affected
--   RETURNING id, first_name, last_name;

-- DELETE

-- DELETE CASCADE FROM students WHERE id=501 RETURNING *;