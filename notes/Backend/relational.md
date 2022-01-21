# Relational Databases
- A database is a collection of data that is organized for quick search and retrieval,
- Database Management System (DBMS) is software that manages databases.
- A Relational DBMS (RDBMS) is a type of DBMS that stores data in tabular form with relationships between the tables.

## Relationships
### One-to-One
- one row in a table is linked to only one row in another table. 

### One-to-Many
- one row in a table is linked to many rows in another table. 

### Many-to-Many
- many rows in a table are linked to many rows in another table. 
## Rows
- hold the information that is directly related to each column and represents a record of the table, similar to what you would see in an excel spreadsheet. 
- cannot have empty data within a row.
  - data missing for each column can be set as `NULL`
  - `NULL` is used to specify that the data doesn't exist
## Columns
- contain the type of information the rows need to contain.
### Column Types
- CHAR(size)	
  - Holds a fixed amount of characters in a string (can contain letters, numbers and special characters). The size is defined within the parenthesis and can store up to 255 characters. If the datatype is defined CHAR(5), the string HAS to hold 5 characters.
- VARCHAR(size)	
  - Holds a variable amount of characters in a string (letters, numbers, special characters). The maximum size is located within the parenthesis and can hold up to 255 characters. If the datatype is defined VARCHAR(20), the string can hold up to 20 characters. 
  - The Unicode for VARCHAR is one per character.
- NVARCHAR(size)	
  - Same as VARCHAR but the Unicode is two per character.
- INTEGER	
  - Defines that the data stored in that column has to be an integer.
- DATETIME	
  - Defines that the data stored in that column is in the date time format: 
    - YYYY-MM-DD HH:MM:SS
- NUMERIC(n,n)	
  - Defines how many numbers can live on either side of the decimal point in a number. If numeric is defined like NUMERIC(10,2), then there can be up to 10 numbers on the right and left side of the decimal point and up to 2 numbers on the right side of the decimal. The largest number allowed in this case would be 99,999,999.99

## SQL
- SQL database is a relational database
- organizes the data into one or more tables of columns and rows. 

### SQL Keywords
- `SELECT`	Needed to be able to select and view data from database.
- `*`	A wildcard that is used to select all columns.
- `FROM`	Used to identify which table you are selecting from.
- `LIMIT`	Gives the query a limit as to how many rows should be returned.
- `WHERE`	Defines a condition to be met when running a query.
- `AND`	Used alongside the `WHERE` clause and makes it possible to have multiple conditions when selecting.
- `OR`	Used alongside `WHERE` and checks to see if any one of the conditions listed are true.
- `NOT`	Used to check if a condition is not true.
- `LIKE`	Used in a `WHERE` clause to search for a particular pattern or character.
- `%`	Represents zero, one or multiple characters when using `LIKE`.
- `_`	Represents a single character when using `LIKE`.
- `IN`	Allows you to specify multiple values when using `WHERE`
- `ORDER BY`	Used to order the output of a query. Default is alphabetical but can order in reverse alphabetical by using `DESC`.
- `JOIN` an operand that allows you to select a row that contains columns from multiple tables

## MySQL
### SELECT
- keyword `SELECT`
  - read the data from the database
- keyword `FROM`
  - defines from which table within the database to select.
- `SELECT [column_names] FROM [table_name];`
- use `*` 
  - to see every column that exists in the table
- `SELECT * FROM [table_name]`
### LIMIT
- keyword `LIMIT`
  - that will limit the data to a certain number of rows.
- `SELECT title, description, release_year FROM sakila.film LIMIT 5`
### WHERE
- keyword `WHERE`
  - which will define any restrictions on the data.
- `SELECT [column names] FROM table_name WHERE [row restrictions]`
  - `row restrictions`
    - check against the contents of one or more columns in the row.
    - very common restrictions have to do with equality and relative size
      - Equality: `=`
      - Inequality: `!=`
      - Greater than: `>`
      - Greater than or equal to: `>=`
      - Less than:`<`
      - Less than or equal to: `<=`
- `AND`,`OR`,`NOT`
  - operators can be combined with the `WHERE` clause.
  - `AND` and `OR` operators are used to filter the data based on more than one condition.
    - `SELECT title, rating, length, release_year FROM sakila.film WHERE rating = "PG" AND length < 100 AND replacement_cost < 19.99`
    - `SELECT title, rating, length release_year FROM sakila.film WHERE rating = "PG" OR length < 100 OR replacement_cost < 19.99`
  - `NOT` operator checks to see if something is not true
    - `SELECT title, rating FROM sakila.film WHERE rating != "PG"`
- `LIKE` 
  - operator is used in a `WHERE` clause to search for a particular pattern or character.
  - using `LIKE`, you need to use one of two wildcards:
    - `%` (percent sign) represents zero, one or multiple characters
      - after the character begins with (the%)
      - before the character ends with (%the)
      - find any data that has a character  anywhere within the value (%the%)
    - `_` (underscore) represents a single character
      - specific character in a particular position
      - the second position of the value.
      - the third position, just add another underscore before the "r"
  - `SELECT title FROM sakila.film WHERE title LIKE 'the%';`
- `IN`
  - operator allows you to specify multiple values when using `WHERE`. It is shorthand for having multiple `OR` conditions.
  - `SELECT [column_names] FROM [table_name WHERE [column_name] IN (value1, value2, value3...);`
  - `SELECT [column_names] FROM [table_name WHERE [column_name] IN (SELECT statement);`
### ORDER BY
- you can order your request with `ORDER BY`
- add an `ORDER BY` clause to your query and specify which columns you want to use.
- `SELECT title FROM sakila.film ORDER BY title`
- default, the ordering is done in ascending order
- `DESC` after the column. to reverse the order
  - `SELECT title FROM sakila.film ORDER BY title DESC`
- `ORDER BY` can be combined with `WHERE`
  - `SELECT title FROM sakila.film WHERE length < 100 ORDER BY title`
### String Functions
- `UPPER()` function will convert all characters in a string to uppercase.
- `LOWER()` function will convert all characters in a string to lowercase.
### JOIN
- keyword `INNER JOIN`
  - select data that have matching values within two different tables. 
- `SELECT [columnName] FROM [table1] INNER JOIN[table2] ON table1.columnName = table2.columnName;`
- keyword `OUTER JOIN`
  - outer join takes every row from either the left or right
  - if a matching row exists in the other table, then those columns are included as well.
- `LEFT OUTER JOIN`
  - return all records from the left table and all matched records from the right table. 
- `RIGHT OUTER JOIN`
  - returning all of the records of the right table instead of the left
- `USING`
  - assumes that both tables are defined and have the column name. Therefore, you don't need to define the table name when looking for the same column in two tables.
```
SELECT first_name, last_name, film_id
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id
```
```
SELECT first_name, last_name, film_id
FROM sakila.actor
INNER JOIN sakila.film_actor
USING(actor_id)
```
#### Joins Key Terms
- `JOIN` SQL Command to join two or more tables together.
- `INNER JOIN`	SQL command to join two tables, only including records which have data present in both tables. Is also referred to as a `JOIN`.
- `OUTER JOIN`	SQL command to join two tables, including all of the records from one table, along with the matching values from the other.
- `OUTER LEFT JOIN`	Returns all records from the left table, and the matched records from the right table.
- `OUTER RIGHT JOIN`	Returns all records from the right table, and the matched records from the left table.
- `ON`	Used to identify the table and column for the first and second tables in an `OUTER` or `INNER JOIN`.
- `USING`	Shorthand for `ON` which allows you to define the column name once.
- `AS`	Gives the ability to change the column name in a query.
### Aliases
- are used to give tables or columns different names than what is currently in the database. 
- Keyword `AS`
- `SELECT title AS filmTitle FROM sakila.film`
- can query that column but name it something different so you can easily identify it after the query.

## CRUD in SQL
- Create, Read, Update, Delete (CRUD)
- Insert, Select, Update, Delete (SQL Command)
