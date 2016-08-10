# SQL

Databases power web applications everywhere by enabling them to persist, modify, and query datasets to great effect. While there are many types of database options available now, Structured Query Language (SQL) remains the de facto standard for communicating with relational database systems. Let's build some SQL skills!

## Persistence

- it's nice to have computers remember things for us
- it's also nice to be able to query & modify our data
- can store data on a server or on the client-side (aka in the browser)

## CRUD

- the basic operations of data management
- Create
- Read
- Update
- Destroy!

## Relational Data

- basically, a table or collection of tables
- columns = properties/attributes
- rows = data items

## SQL

- Structured Query Language
- Declarative! Say what you want, and let SQL worry about the details
- Structured! the grammar is formalized
- each command is a statement
- overall structure = DATABASE -> TABLE(S) -> ROWS/COLUMNS

```sql
DELETE FROM users WHERE name = 'Scott';
```

- statements consist of clauses, predicates, expressions, and constraints
- clause: SQL command + predicate(s)
  - `DELETE FROM users`
  - `WHERE name = 'Scott'`
- predicate: conditional statement that can be evaluated True/False/Unknown
  - `name = 'Scott'`
- expression: used to produce values
  - `SET counter = counter + 1` <- `counter + 1` is the expression
- constraint: narrow down the results
  - `WHERE name = 'Scott'`
- end statements with semicolon
- insignificant whitespace is ignored to enhance readability

## Working with tables

- CREATE, ALTER, DROP, TRUNCATE

**CREATE**

```sql
CREATE TABLE people(
  id INTEGER PRIMARY KEY,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  age INTEGER,
  ssn CHAR(9) UNIQUE,
  birthdate DATE
);
```

[data types](http://www.w3schools.com/sql/sql_datatypes_general.asp)

**DROP & TRUNCATE**

DROP deletes the whole table; TRUNCATE deletes the data but keeps the table

```sql
DROP TABLE people;
```

## CRUD for SQL data

**Create**

- INSERT INTO

```sql
INSERT INTO people (firstName, lastName, age, ssn, birthdate)
  VALUES('Dan', 'Schwartz', 35, 123456789, '1981-04-30');
```

**Read**

- SELECT

```sql
SELECT column(s) or *
  FROM table
  WHERE column operator value
  ORDER BY column ASC;
```

```sql
SELECT firstName, lastName
  FROM people
  WHERE age = 35;
  ORDER BY lastName ASC;
```

[operators](https://en.wikipedia.org/wiki/SQL#Operators)

**Update**

- UPDATE & SET
  - always use a constraint!

```sql
UPDATE people
  SET ssn = 987654321
  WHERE lastName = 'Schwartz';
```

**Destroy**

- DELETE FROM
  - delete all, some, or one record(s)

```sql
DELETE FROM people;

or

DELETE * FROM people;

DELETE FROM people
  WHERE lastName = 'Schwartz';
```

## WebDB

- a convenient wrapper for html5sql
- `webDB.init()`: connect to a websql database
- `webDB.execute(sql, callback)`: execute one or more SQL statements
  - optional success callback
    - callback receives a resultsArray argument
  - pass single statement as a SQL string
  - pass multiple statements as an array of SQL strings OR
  - pass array of SQL objects to safely pass dynamic data


```javascript
webDB.execute(
  'SELECT * FROM people;',
  callback
);

webDB.execute(
  [
    'DELETE FROM people WHERE id = 1;',
    'SELECT * FROM people'
  ],
  callback
);

webDB.execute(
  [
    {
      sql: 'SELECT * FROM people WHERE id = ?;',
      data: [id]
    }
  ],
  callback
);

webDB.execute(
  [
    {
      sql: 'INSERT INTO people (firstName, lastName, age, ssn, birthdate) VALUES(?, ?, ?, ?, ?);',
      data: [dan.firstName, dan.lastName, dan.age, dan.ssn, dan.birthdate]
    }
  ],
  callback
);
```
