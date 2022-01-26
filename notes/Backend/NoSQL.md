# NoSQL
- (not only SQL) or (non-SQL) database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases.

- Types of NoSQL Databases
  - Document Stores
  - Key-Value Stores
  - Graph Databases
  - Wide Column Stores

## Document Stores
- contain documents that are usually in a JSON format but contain a special key maintained by the data store to identify each document.
- using the key one document can make reference to another document similar to a foreign key in a SQL table
- types of Document Store databases
  - MongoDB
  - Couchbase
- types of  structure
  - BSON
  - XML
  - JSON.
## Key-Value Stores
- is the simplest and fastest NoSQL database since it only contains an identifier and value for each record. This is similar to the use of variables in programming languages.
- An identifier is used as a marker of where a piece of information can be located within the database. This is the key. 
- To return the value, simply use the key which represents the storage of that value.
- sometimes referred to as a dictionary - as it works in the same fashion. In a dictionary, the word itself that you look up would be the key, and the value associated with that key would be the definition of the word.
- types of Key-Value Stores
  - Redis
  - Riak
  - Amazon DynamoDB

## Graph Databases
- are very similar to document stores with an additional layer of relationship binding between the documents. 
- These documents are instead called Verticies, Nodes or Points while the relationships between theses vertices are called Edges. 
- Graph databases are designed to have vertices be based around nouns such as persons, places, and objects. 
- By using edges to declare the relationships between vertices rather than a key/foreign key relationship is the separation of the relationships from the data itself. This allows for a change of relationships or data to not affect each other. 
- types of Graph Databases
  - Neo4J

## Wide Column Stores
- like a SQL database table but each record has it's own column names, and the key is required
- large amounts of data can be stored conveniently this way without the need for a specific structured tables like a SQL database has. 
- tend to be incredibly fast because of the one for one relationship between the key and the data
- types of Wide Column Stores
  - Cassandra

## MongoDB
- is a document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
### Terms
- `Atlas`	Cloud database management.
- `Collection`	A grouping of MongoDB documents within a database.
- `JSON`	JavaScript Object Notation (JSON) is an open, human and machine-readable standard that facilitates data interchange
- `JSON types`	String, Number, Object (JSON object), Array, Boolean, Null
- `Relationships`	One-to-One, One-to-Many, Many-to-Many
- `db.collectionName.insertOne({document})`	Inserts one document into the collection defined.
- `db.collectionName.insertMany([{document1}, {document2}, ...])`	Inserts many documents into the collection defined.
- `field`	Part of the document that includes the different data for that particular document.
- `db.collectionName.find({})`	A basic query that will find all documents within a collection.

### MongoDB Collections
- are a grouping of MongoDB documents and is the equivalent of an RDBMS table.
- A `collection` exists within a single database and does not enforce a schema (or a blueprint of your data).
- Documents within a collection can have different fields. Typically, all documents in a collection have a similar or related purpose. You can refer to this as a flexible schema.
- Within collections are `documents`
  - `Documents` are independent units that make performance better (related data is read contiguously off of the disk)
    - makes it easier to distribute data across multiple servers while preserving its locality.
    - Each document has a `document ID`
      - document ID: is the unique identifier for a document.
- Collections and Documents performs CRUD (Create, Read, Update, Delete) operations.
- to create a collection
  - you will need a function with an argument
    - `db.createCollection("nameOfYourCollection")`

### Data Types
- When creating a document, the data within it needs to live somewhere.
- with MongoDB, the data lives within a JSON file.
#### JSON
- JavaScript Object Notation (JSON) is a lightweight data-interchange format that is easy for humans to read and write and for machines to parse and generate.
- JSON supports all basic data types: 
  - numbers
  - strings
  - booleans
  - objects(JSON object)
  - arrays
  - hashes
  - date(only in string representations)
- JSON values cannot be 
  - Function
  - Date
  - undefined
- MongoDB and other document databases use JSON documents to store records, while relational databases use tables and rows to store records.
```JSON
{
  "_id": 1,
  "name": { "first": "John", "last": "Backus" },
  "contribs": ["Fortran", "ALGOL", "Backus-Naur Form", "FP"],
  "awards": [
    {
      "award": "W.W. McDowell Award",
      "year": 1967,
      "by": "IEEE Computer Society"
    },
    {
      "award": "Draper Prize",
      "year": 1993,
      "by": "National Academy of Engineering"
    }
  ]
}
```
##### JSON Types
- Strings in JSON must be written within quotes:
  - `{ "name": "Emily" } `
- Numbers in JSON must be an integer and will NOT be wrapped in quotes:
  - `{ "age": 30 }`
- JSON values can be objects.
  - objects are like a physical object like a car: it has many components that make up the full object.
```json
{
  "customer": {
    "firstName": "Carl",
    "lastName": "Orff",
    "age": 75,
    "location": "Munich"
  }
}
```
- JSON values can be arrays. Arrays are used to store multiple values within a single variable.
```JSON
{
  "customers": ["Anna", "Mary", "Thomas", "Robert", "Tom", "Cora"]
}
```
- JSON values can be booleans. Booleans are values that are either set to be true or false.
  - `{ "sale": true }`
- JSON values can also be Null. Null is a value that does not exist but prevents the field from being empty.
  - `{ "middlename": null }`

### Relationships
- Data within MongoDB has something called a flexible schema. Which means that collections within a database do not enforce a certain data structure.
- Depending on how the data is modeled in the collection, it can affect the application's performance and database capacity. These are referred to as `embedded documents`
- common way of structuring data in MongoDB.

#### One-to-One Relationship
- allows you to retrieve all of the data of this customer with only one query.
#### One-to-Many Relationship
- when embedding multiple documents within one field is that they need to be contained within square brackets []:
- allow you to pull in all of the data of a specific customer with one query.
#### Many-to-Many Relations
- referencing documents will be more efficient than embedding documents

### Inserting Documents
- Each document has a field and a value. That value can then be an embedded document if needed.
#### Insert a Single Document
- To insert a single document into a collection you would use insertOne()
- `db.collectionName.insertOne([document_schema])`
- The `[document_schema]` is the document itself and includes the fields and values separated by commas (,) within curly braces ({}). 
- When inserting documents, you must make sure that each document has a unique identifier, usually an _id. If you insert a document without an _id field, MongoDB will create one for you automatically. If you would not like to do that, you can identify the document ID yourself. You MUST make sure that the documentID does not already exist, or you will have an error that is thrown when you try to run the insert.
```JSON
db.appusers.insertOne({_id:1,lastName:"Pumpernickel", firstName:"Georgina", middleName:"Sasquatch", age:27, gender:"f"})
```
#### Inserting Many Documents
- `.insertMany()`
- where you can insert several documents into the same collection at once.
- `db.collectionName.insertMany( [ {document1}, {document2}, … {documentN}])`
- When inserting many documents, all documents must be within square brackets [] for the insert query to run correctly.

#### Create Collection When Inserting
- use the `db.createCollection` function to create a collection, but there is a shortcut.
- If you run an insert query with a collection name that does not already exist, it will automatically create that collection for you.

### Querying Documents
- finding documents in a collections

#### Syntax
- `find()`: find an entire collection without any parameters
  - `db.collectionName.find({})`
  - MongoDB uses a cursor to retrieve the documents for you, which is simply a pointer to the result set.
  - If your collection exceeds 20 documents, then the first 20 will be shown, and you will need to type `it` to continue iterating to the next 20 documents.
- When you don't want to return every document within a collection
  - `db.collectionName.find({query, projection})`
  - Query: Specifies a selection filter using query operators and is optional.
  - Projection: Specifies certain fields to return in the documents that match the query filter and is optional. To return all fields in the matching documents, omit this parameter.
  - Cursor: A pointer to the result set of a query. This is the output of whatever documents you are locating and from which you are selecting.
#### Query Operators
- To limit your document result set
  - Comparison Query Operators
  - Logical Query Operators
  - Element Query Operators.

##### Comparison Query Operators
- compare documents against the specified value.
- `$eq`: query operator will query documents that are equal to the specified value.
  - `db.appusers.find({ _id : { $eq : 1} })`
- `$ne`: Matches all documents that are not equal to the specified value.
  - `db.appusers.find({ _id : { $ne : 1} })`
- `$gt`: Matches all documents that are greater than the specified value.
  - `db.appusers.find({ _id : { $gt : 1} })`
- `$gte`: Matches all documents that are greater than or equal to the specified value.
  - `db.appusers.find({ _id : { $gte : 2} })`
- `$lt`: Matches all documents that are less than the specified value.
  - `db.appusers.find({ _id : { $lt : 2} })`
- `$lte`: Matches all documents that are less than or equal to the specified value.
- `db.appusers.find({ _id : { $lte : 2} })`





 
