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
- `Create, Read, Update, Delete (CRUD)`
- `Insert, Select, Update, Delete (SQL Command)`
- Data Manipulation Language (DML)
### Keywords
- `CRUD`	Stands for Create, Read, Update and Delete. SQL uses slightly different keywords to complete these tasks.
- `SELECT` read and look up data
- `INSERT` INTO	Used to insert data into a table.
- `VALUES`	Used along with INSERT INTO to define what values are being inserted into a table.
- `IS NULL`	Used along with WHERE as a condition to see the data that has NULL as a value in a column.
- `IS NOT NULL`	Used along with WHERE as a condition to see the data that does not have NULL as a value in a column.
- `UPDATE`	Used to update data within a column based on a condition.
- `SET`	Used along side UPDATE to set the data to be the desired value in a particular column.
- `DELETE`	Deletes specific data based on a condition.

### INSERT INTO
- keyword `INSERT INTO`
  - statement is used to insert data into a table within a database. 
  - two ways to insert data into the database.
    1. specify both the columns and the values of the columns:
      - `INSERT INTO table_name (column1, column2, column3...) VALUES (value1, value2, value3...);`
    2. insert values for every column in the table.
      - ` INSERT INTO table_name VALUES (value1, value2, value3...);`

### NULL
- field that does not have a value will be read as a `Null` value.
- `Null` means that the value was left blank when the record was created.
- It is possible to check using SQL keywords for Null values or non-Null values.
  - keywords `IS NULL` 
    - `SELECT column_names FROM table_name WHERE column_name IS NULL;`
  - keywords `IS NOT NULL` keywords
    -  `SELECT column_names FROM table_name WHERE column_name IS NOT NULL;`

### UPDATE
- Keyword `UPDATE` 
 - `SET` set the field you want to be updated to new data
- `UPDATE table_name SET column1 = value1 column2 = value2, ... WHERE condition;`
- can update a lot of things with one query
- **Warning** If you don't include the `WHERE` statement when updating data, it will update every row to what you have `SET`.

### DELETE
- `Delete` is a way to remove existing data from a table
- `DELETE FROM table_name WHERE condition;`

## Tables
- SQL that creates and modify the structure of tables are called **Data Definition Language** (DDL)

### Keywords

- `CREATE TABLE`	SQL keyword to create a new table in a database.
- `DROP TABLE`	Used to drop a table in a database.
- `NOT NULL`	Constraint used to define that a column in a table cannot be null.
- `UNIQUE`	Constraint used to define that a column in a table has to be unique.
- `PRIMARY KEY`	A combination of `UNIQUE` and `NOT NULL` and can only be used once in a table. Two types are Natural and Surrogate.
- `AUTO_INCREMENT`	Keyword to automatically generate a unique number for each record.
- `FOREIGN KEY`	The relation between tables that will restrict the insertion of data in one table, depending on the contents of a second table. The `FOREIGN KEY` refers to the `PRIMARY KEY` in a separate table.
- `CHECK`	An expression that will check each entry into the table for validation when the table is created.
- `DEFAULT`	Defines a default value for a column if a value is not supplied.
- `Triggers`	Objects that will run code based on the operation that is performed on a table.
- `CREATE VIEW`	Creates a virtual table called a View so queries only need to be run once and can then be assigned to the view. Prevents having to run a query many times to see information.
- `UPDATE VIEW`	Used to update the columns in a View.
- `DROP VIEW`	Used to drop a view.

### Columns
- where the actual data will live 
- define these columns (also called fields) with a datatype that you deem appropriate for the data you wish to store. 

### Nullability
- `Null` is a value that is undefined
- keywords `NULL` or `NOT NULL`

### Creating Tables
- keyword `CREATE TABLE`
```SQL
CREATE TABLE table_name (
    column1_name datatype,
    column2_name datatype,
    column3_name datatype,
    column4_name datatype,
    ...
)
```
- column parameters will define the column names in the table. 
- The datatype will specify the type of data each column can hold. 
- common data types used:
  - `CHAR(size)`
  - `VARCHAR(size)`
  - `NVARCHAR(size)`
  - `INTEGER`
  - `DATETIME`
  - `NUMERIC`

#### Constraints
- are used to specify rules for data in a table that will limit the type of data that can go within a table or column.
- will make sure that the data is reliable and accurate and if any of the constraints are violated, the action or query will be aborted. 
##### NOT NULL
- will force that column not to accept null values
- This is useful when you are gathering data from a user (like signing up for a website), and you need every input field to contain some data.
```SQL
CREATE TABLE AppUsers1 (
AppUserID INTEGER,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
SignUpDate DATETIME NOT NULL)
```
- This will ensure that each of those rows in the AppUsers table will have data.

##### UNIQUE
- ensures that some column or combination of columns is unique to each row in the table. 
```SQL
CREATE TABLE AppUsers2 (
AppUserID INTEGER UNIQUE,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
SignUpDate DATETIME NOT NULL)
```
- making sure that the `AppUserID` is going to be unique for each user. 

##### PRIMARY KEY
- is a combination of `NOT NULL` and `UNIQUE`, so that every row in the table is unique and not null. 
- Almost all tables should have a `PRIMARY KEY` 
- Without a `PRIMARY KEY`, there is no way to identify each row uniquely.
```SQL
CREATE TABLE AppUsers3 (
AppUserID INTEGER PRIMARY KEY,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
SignUpDate DATETIME NOT NULL)
```
- replace `UNIQUE` with `PRIMARY KEY`
- This will now ensure that the AppUserID is unique to every row and also is required to have a value.

###### AUTOINCREMENT
- will automatically generate a unique number when a new record is inserted into a table. 
```SQL
CREATE TABLE AppUsers4 (
AppUserID INTEGER PRIMARY KEY AUTO_INCREMENT,
FirstName VARCHAR(50) NOT NULL,
LastName VARCHAR(50) NOT NULL,
SignUpDate DATETIME NOT NULL)
```
- your query will now automatically produce an `AppUserID` when a new row is generated.
- written out differently depending on what type of SQL server you are using. 

###### Types of Primary Keys
- Natural: is a when the Primary Key is assigned to a piece of data that already exists in the record, and will always be unique for each record. 
  - An example of this could be a Social Security Number.
- Surrogate: is a Primary Key that doesn't have anything to do with the actual data.
  - that data has nothing to do with the actual record except to give it a unique piece of data.

###### FOREIGN KEY
- is a relation between tables that will restrict the insertion of data in one table, depending on the contents of a second table. 
- The `FOREIGN KEY` refers to the `PRIMARY KEY` in a separate table.
```SQL
CREATE TABLE customerExample(
  FirstName NVARCHAR(40),
  LastName NVARCHAR(30),
  State NVARCHAR(2),
  FOREIGN KEY(State) REFERENCES states(Abbreviation)
);
```
- using `FOREIGN KEY` to call out the column "State" in your customers table, so it references the Abbreviation column in the states table

##### CHECK
- is an expression that you create that will check each entry into the table for validation.
```SQL
CREATE TABLE customerExample(
  FirstName NVARCHAR(40),
  LastName NVARCHAR(30),
  State NVARCHAR(10),
  PostalCode INTEGER,
  FOREIGN KEY(State) REFERENCES states(Abbreviation),
  CHECK (length(PostalCode) = 5)
);
```
- that `CHECK` is used to ensure that PostalCode is equal to 5. 
- you needed to use `length()`, a function that will return the length of whatever is inside the parenthesis. 
- Say you are inserting a new customer into this table and forget a number in the postal code. You will get an error

##### DEFAULT
- defines default values that you can assign to a column, in the case where an insert statement does not include a value for that column.
```SQL
CREATE TABLE customerExample(
  FirstName NVARCHAR(40),
  LastName NVARCHAR(30),
  State NVARCHAR(10),
  PostalCode INTEGER,
  SignUpDate datetime DEFAULT current_timestamp,
  FOREIGN KEY(State) REFERENCES states(Abbreviation),
  CHECK (length(PostalCode) = 5)
);
```
- set the default constraint to the `datetime()` function, 
- which would populate the date and time (local time, not UTC) of when the record was created in the table. 

##### Triggers
- are objects that you can append to your table that will run code based on the operation that is performed on a table.

### Insert
- with new table you can insert data in your rows
#### Insert All Columns
- If you wanted to insert all columns from one table to another,
```SQL
INSERT INTO table2
SELECT * FROM table1
WHERE condition;
```
-  each table MUST have the same name, number, and order of the columns. 
- you will get an error.
#### Insert Some Columns
- If you wanted to insert only some columns
```SQL
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1;
```
- You could also add a where statement to this
```SQL
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;
```
- you are now using `SELECT` to select which columns should be inserted into your table.

### Dropping a Table
- to delete the table
- keyword `DROP TABLE`
- `DROP TABLE table_name;`

### Views
- is a virtual table based on the result of a SQL statement
- contains rows and columns, just like a real table, but when a view is created, a table is NOT created; you are just showing the output of the selected data.
- can use SQL functions, `WHERE`, and `JOIN` statements in a view to be able to present the data as if it were coming from one table.
```SQL
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```
- to see the View
  - `SELECT * FROM view_name;
#### Create View with Join
- Creating a `View` using a `Join` will look very similar to `Joins`. 
```SQL
SELECT first_name, last_name, film_id
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id
```
```SQL
create view ActorFilms as
SELECT first_name, last_name, film_id
FROM sakila.actor
INNER JOIN sakila.film_actor
ON sakila.actor.actor_id = sakila.film_actor.actor_id
```
#### Drop View
- can delete View
- keyword DROP VIEW
- `DROP VIEW view_name`;

## Indexes and Project
- Indexes deal with the ordering of your data and have a significant impact on the performance of your database.
- retrieve the data from the database very quickly and improves the read time of the data. 
- it lengthens the write-time when creating a new record. 
- two particular types of indexes in SQL server
  - Clustered Index
  - Non-Clustered Index
### Clustered Index
- physical order of the data as it is stored on disk.
- the SQL server stores it by that column.
- can only have one of these on a table, it is common that the primary key is also the clustered index.
### Non-Clustered Index



