-- Exercise: Group by Ages

-- SELECT
--     ARRAY_AGG(first_name) AS names,
--     age,
--     COUNT(*) AS occurences
--   FROM students
--   GROUP BY age
--   ORDER BY occurences DESC;

-- Demo: First Join

-- SELECT
--     students.first_name,
--     COUNT(*) AS project_count
--   FROM students
--   INNER JOIN projects ON students.id = projects.student_id
--   GROUP BY students.first_name
--   ORDER BY project_count DESC;

-- Exercise: Select all students and their scores from the
-- enrolment table in one query. Ordering the results by their
-- scores.

-- SELECT students.id, students.first_name, enrolments.score
--   FROM students
--   INNER JOIN enrolments ON students.id = enrolments.student_id
--   ORDER BY students.id;

-- Demo: Students from Course

-- SELECT
--     courses.title AS course_title,
--     students.first_name,
--     students.last_name
--   FROM courses
--   INNER JOIN enrolments ON courses.id = enrolments.course_id
--   INNER JOIN students ON enrolments.student_id = students.id
--   WHERE courses.title ILIKE '%hybrid matrix%';

-- Demo: Students & Their Projects

-- SELECT students.id, students.first_name, projects.title
--   FROM students
--   LEFT JOIN projects ON students.id = projects.student_id;

-- Exercise: Without Projects

-- SELECT students.id, students.first_name, projects.title
--   FROM projects
--   LEFT JOIN students ON students.id = projects.student_id;

-- JOIN + GROUP BY

-- DEMO: Avg. Score of Courses

-- SELECT
--     courses.title AS course_title,
--     ROUND(AVG(enrolments.score), 2) AS course_average
--   FROM courses
--   INNER JOIN enrolments ON courses.id = enrolments.course_id
--   GROUP BY courses.title
--   ORDER BY course_average DESC;

-- Exercise: No. of Enrolled Students

-- SELECT 
--     courses.title AS course_title,
--     COUNT(enrolments.student_id) AS student_counts
--   FROM courses
--   INNER JOIN enrolments ON courses.id = enrolments.course_id
--   GROUP BY courses.title
--   ORDER BY student_counts DESC;

-- Exercise: No. of Enrolled Students, but only courses
-- where student cound is greater than 2

-- Requires the use of a sub-query where query the
-- temporary table created by the first query

-- SELECT course_title, student_counts
--   FROM (
--     SELECT 
--         courses.title AS course_title,
--         COUNT(enrolments.student_id) AS student_counts
--       FROM courses
--       INNER JOIN enrolments ON courses.id = enrolments.course_id
--       GROUP BY courses.title
--       ORDER BY student_counts DESC
--   ) AS course_with_counts -- When creating a sub-query, aliasing
--   -- the sub-query is required
--   WHERE student_counts > 2;

-- Exercise: Last Registered

SELECT
    courses.title AS course_title,
    MAX(students.registration_date) AS last_registration_date
  FROM courses
  JOIN enrolments ON enrolments.course_id = courses.id
  JOIN students ON students.id = enrolments.student_id
  GROUP BY courses.title
  ORDER BY last_registration_date DESC;


/*

courses |

course     | enrolments                   | students
id | title | id  | course_id | student_id | id | name
1    js    | 1     1           1          | 1    Bob
1    js    | 2     1           2          | 2    Jon

*/

-- Demo: Make Not Null

-- ALTER TABLE cars ALTER COLUMN make SET NOT NUll;

-- INSERT INTO cars (model) VALUES ('Thing');

-- ERROR:  null value in column "make" violates not-null constraint
-- DETAIL:  Failing row contains (3, null, Thing, null, null).
-- Time: 0.538 ms