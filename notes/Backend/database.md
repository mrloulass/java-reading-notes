# Backend

## Database
- a data structure that stores organized information

### [Relational](https://www.oracle.com/database/what-is-a-relational-database/) (SQL)
- type of database that stores and provides access to data points that are related to one another.
- Examples of popular Relational Database Management Systems (RDBMS) are:
  - MySQL
  - Oracle
  - IMB DB2
  - Microsoft SQL Server
  - MariaDB
  - PostgreSQL
  - Sybase
- most adaptable database models in existence. Other databases struggle to maintain the level of timely consistency that the relational model can provide with huge amounts of data.
- seeks to move the data into a fashion that brings efficiency by ensuring that pieces of data are stored in singular places instead of multiple locations; this reduces the space and resources required to store and query the data.

#### Normalization
- process of structuring the relational database in accordance with several types of "normal forms" that seek to reduce redundancy and improve data integrity.

#### Architecture
- Most widely deployed type of Database Management Systems (DBMS)
- Great for transactional records and processing
- Accessed using Structured Query Language (SQL)
- Excels at reading and querying structured data

#### Average Use Case
- Sales transaction database
- Healthcare information
- Order management system
- Inventory management

#### Data Modeling
- conceptualizing and determining how a database should be structured, it is important to have an idea of what data will be contained and how it will be managed.
- three primary types of data models:
  - Conceptual:
    - "What the system contains": The conceptual model is the business model and is the most simple representation of the system. It is typically defined by the business stakeholders and system architects.
  - Logical:
    - The "How" regardless of DBMS: An approach to implementing the system that is agnostic of the database management system. This is typically drafted by the data architects and business analysts.
  - Physical:
    - The "How" with the DBMS: The physical model defines how the system will be deployed utilizing a specific DBMS. This is typically created by the DBA and developers.

#### Schemas

### Object-Oriented (OODBs)
- any database that is non-relational
- object-oriented database focuses on tracking information represented by the modeling and creation of data as objects similar to object-oriented programming.

#### Architecture
- Commonly used in applications that require high performance, calculations, and faster results.

#### Average Use Case
- Real-time systems
- Architectural and engineering for 3D modeling
- Telecommunications
- Scientific products
  - Molecular science
  - Astronomy

#### Schemas

### NoSQL () non-relational
- are non-tabular (data arranged in vertical columns and horizontal rows) and store data differently than relational tables. NoSQL databases come in a variety of types based on their data model. 
- main types:
  - document
  - key-value
  - wide-column
  - graph
- NoSQL databases are:
  - MongoDB
  - Apache’s CouchDB
  - HBase
  - Oracle NoSQL
  - Apache’s Cassandra DB

#### Architecture
- provide flexible schemas and scale easily with large amounts of data and high user loads.

#### Average Use Case
- Video gaming
- Content management
- Real-time data analysis
- Document databases
- Graph databases

#### Schemas


