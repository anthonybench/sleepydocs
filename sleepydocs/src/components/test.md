# <img alt="example image tag" src="https://i.imgur.com/VmQGj9e.png" width="120" />
*A succinct quide to query basics*





## Preface
There is no universal <abbr title="Structured Query Language">*SQL*</abbr> syntax, as it depends solely on the <abbr title="Database Management System">**DBMS**</abbr> being used. This document attempts to deliver the most common syntax, but **there will be slight variation among different managers**.

Although it is common practice to **capitalize SQL keywords**, it is usually unnecessary, though considered "best practices".

**Data types** are best summarized [here, at w3schools](https://www.w3schools.com/sql/sql_datatypes.asp).

**Comments** are usually prepended by `--`, like so:
```sql
-- this is a comment
```

<br />

## table
*Basic Queries*
- [SELECT, AS, FROM](#select-as-from)
- [WHERE, AND, OR, IN](#where-and-or-in)
- [DISTINCT](#distinct)
- [BETWEEN](#between)
- [LIKE](#like)
- [NULL](#null)
- [CASE, WHEN, THEN, ELSE, END](#case-when-then-else-end)
- [LIMIT](#limit)
- [ORDER BY, DESC](#order-by-desc)

*Creating and Editing Tables*
- [CREATE TABLE](#create-table)
- [INSERT INTO, VALUES](#insert-into-values)
- [ALTER TABLE, ADD COLUMN](#alter-table-add-column)
- [UPDATE, SET](#update-set)
- [DELETE FROM](#delete-from)

*Aggregate Functions*
- [COUNT](#count)
- [SUM](#sum)
- [MAX, MIN](#max-min)
- [AVG](#avg)
- [ROUND](#round)
- [GROUP BY](#group-by)
- [HAVING](#having)

*Joining Tables*
- [JOIN, LEFT JOIN, RIGHT JOIN, ON](#join-left-join-right-join-on)
- [UNION](#union)
- [WITH](#with)

[References](#references)

<br /><br />

## **Basic Queries**
<hr><br />

## SELECT, AS, FROM
*`SELECT <column_name> AS <alias> FROM <table_name>;`*
```sql
SELECT * FROM <table_name>; -- all data

SELECT <column_name> FROM <table_name>; -- single column

SELECT <column_name>, <column_name>
FROM <table_name>; -- multiple columns

SELECT <column_name> AS <alias>
FROM <table_name>; -- alias single column

SELECT <column_name> AS <alias>, <column_name> AS <alias>
FROM <table_anme>; -- alias multiple columns

SELECT <column_name> AS "contains spaces"
FROM <table_name>; -- alias with spaces
```

<br />

## WHERE, AND, OR, IN
*`... WHERE <column_name> <ooperator> <value>;`*
```sql
SELECT * FROM <table_name> WHERE <column_name> != 4;

SELECT * FROM <table_name>
WHERE <column_name> > "2015-12-19" AND <column_name> = "Sleepy String"; -- text and date types must be wrapped in quotes!

SELECT * FROM <table_name>
WHERE <column_name> >= 4 OR <column_name> < 5;

SELECT * FROM <table_name>
WHERE <column_name> = 5 OR <column_name> = 7 OR <column_name> = 9; -- several and/or conditions

SELECT * FROM <table_name>
WHERE <column_name> IN (5,7,9); -- concise alternative to several or conditions
```

<br />

## DISTINCT
*`SELECT DISTINCT ...`*
```sql
SELECT DISTINCT <column_name>
FROM <table_name>; -- ignore duplicate values in column
```

<br />

## BETWEEN
*`... WHERE <column_name> BETWEEN <value> AND <value>;`*
```sql
SELECT * FROM <table_name>
WHERE <column_name> BETWEEN 4 AND 8; -- inclusive
```

<br />

## LIKE
*`... WHERE <column_name> LIKE <regular_expression>;`*
```sql
SELECT * FROM <table_name>
WHERE <column_name> LIKE "universe"; -- universe, any casing

SELECT * FROM <table_name>
WHERE <column_name> LIKE "%universe%"; -- anything + universe + anything
```

<br />

## NULL
*`... <value> IS NULL; ... <value> IS NOT NULL;`*
```sql
SELECT * FROM <table_name> WHERE <column_name> IS NULL;

SELECT * FROM <table_name> WHERE <column_name> IS NOT NULL;
```

<br />

## CASE, WHEN, THEN, ELSE, END
*`SELECT <column_name> CASE WHEN <condition> THEN <value> ELSE <value> END FROM <table_name>;`*
```sql
SELECT <column_name>,
	CASE
		WHEN <column_name> > 8 THEN "big!"
		WHEN <column_name> < 6 THEN "small!"
		ELSE "meh!"
	END
FROM <table_name>;
```

<br />

## LIMIT
*`... LIMIT <int>;`*
```sql
SELECT * FROM <table_name>
LIMIT 10; -- first 10 results
```

<br />

## ORDER BY, DESC
*`... ORDER BY <column_name> DESC;`*
```sql
SELECT * FROM <table_name>
WHERE <column_name> > 8
ORDER BY <column_name> DESC; -- order by highest to lowest
```

<br /><br />

## **Creating and Editing Tables**
<hr><br />

## CREATE TABLE
*`CREATE TABLE <table_name> ( <schema> );`*
```sql
CREATE TABLE celebs ( 
	id INTEGER PRIMARY KEY,
	name TEXT UNIQUE,
	date_of_birth TEXT NOT NULL, 
	date_of_death TEXT DEFAULT 'Not Applicable' 
);
```

<br />

## INSERT INTO, VALUES
*`INSERT INTO <table_name> ( <column_names> ) VALUES ( <values> );`*
```sql
INSERT INTO <table_name> (<column_name>, <column_name>)
VALUES (1, "hello world");
```

<br />

## ALTER TABLE, ADD COLUMN
*`ALTER TABLE <table_name> ADD COLUMN <column_name> <data_type>;`*
```sql
ALTER TABLE <table_name>
ADD COLUMN <column_name> TEXT;
```

<br />

## UPDATE, SET
*`UPDATE <table_name> SET <column_name> = <value> WHERE <condition>;`*
```sql
UPDATE <table_name>
SET <column_name> = "some value"
WHERE <column_name> = 4;
```

<br />

##  DELETE FROM
*`DELETE FROM <table_name> WHERE ...`*
```sql
DELETE FROM <table_name>
WHERE <column_name> IS NULL; -- removes entry
```

<br /><br />


## **Aggregate Functions**
<hr><br />

## COUNT
```sql
SELECT COUNT(*) FROM <table_name>; -- returns count
```

<br />

## SUM
```sql
SELECT SUM(<column_name>)
FROM <table_name>; -- returns sum, column must be number type
```

<br />

## MAX, MIN
```sql
SELECT MAX(<column_name>)
FROM <table_name>; -- returns max value from column, column must be number type

SELECT MIN(<column_name>)
FROM <table_name>; -- returns min value from column, column must be number type
```

<br />

## AVG
```sql
SELECT AVG(<column_name>)
FROM <table_name>; -- returns average value from column, column must be number type
```

<br />

## ROUND
```sql
SELECT ROUND(<column_name>, 3)
FROM <table_name>; -- rounds each entry in column to 3 decimal places
```

<br />

## GROUP BY
*`... FROM <table_name> GROUP BY <column_name>`*
```sql
SELECT <column_name>, COUNT(*)
FROM <table_name>
GROUP BY <column_name>; -- returns count of entries for each value of column

SELECT ROUND(<column_name),
   COUNT(<column_name>)
FROM <table_name>
GROUP BY 1
ORDER BY 1; -- using `column references`

SELECT <column_name>, <column_name>, AVG(<column_name>)
FROM <table_name>
GROUP BY 1, 2; -- another example, grouping by two columns
```

<br />

## HAVING
*Filters out groups, as opposed to WHERE which filters out rows.*
```sql
SELECT <column_name>, <column_name>
FROM <table_name>
GROUP BY <column_name>
HAVING COUNT(*) > 10; -- returns groups containing more than 10 entries
```

<br />

## **Joining Tables**
<hr><br />

### ***Keys***
A **Primary Key** is unique, required, and there is only one per table.\
A **Foreign Key** refers to another tables *primary key*. \
A **Super Key** is any subset of columns containing but not limited to defining columns of the table. \
A **Candidate Key** is a *minimal superkey*, meaning it omits columns not necessary to defining the table.\
A **Surrogate Key** is an artificial key to uniquely identify rows, as a stand-in for a *primary key*.

### ***Joins***
**Inner Join**, typically the default. Sometimes called "simple join" or "semi join".\
**Left Outer Join**, all rows from first table, with matches only from second. Sometimes called "left join".\
**Right Outer Join**, all rows from second table, with matches only from first. Sometimes called "right join".\
**Full Outer Join**, all rows from both tables with null columns upon no-match.\
**Cross Join**, all rows from both table.

<br />

## JOIN, LEFT JOIN, RIGHT JOIN, ON
```sql
-- inner join; omit rows where condition is false
SELECT *
FROM table1 JOIN table2
ON table1.<column_name> = table2.<column_name>;

-- left outer join; keep rows from first table regardless of condition
SELECT *
FROM table1 LEFT JOIN table2
ON table1.<column_name> = table2.<column_name>;

-- cross join; fetch all rows from both tables
SELECT *
FROM table1 CROSS JOIN table2;
```

<br />

## UNION
*Both tables must have same number of columns, with identical data types in the same order*
```sql
SELECT *
FROM table1
UNION
SELECT *
FROM table2;
```

<br />

## WITH
*Join with temporary table from an intermediate query.*
```sql
WITH table1 AS (
	<intermediate_query>
)
SELECT *
FROM table1 JOIN table2
ON table1.<column_name> = table2.<column_name>;
```

<br />

<img alt="example image tag" src="https://i.imgur.com/1fl8ZsE.png" width="700"  />

<br /><br />

## References
- [More on keys](https://www.guru99.com/dbms-keys.html)
- [More on joins](https://stedmansolutions.com/freebies/t-sql-join-types-poster/)
- [Codecademy course](https://www.codecademy.com/learn/learn-sql)
- [More on data types](https://www.w3schools.com/sql/sql_datatypes.asp)

[Back to Table of Contents](#table)