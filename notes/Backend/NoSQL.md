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
##### keywords
- `db.collectionName.find({})`	Basic query that will find all documents and their fields in the specified collection.
- `Query`	Specifies a selection filter using query operators and is optional.
- `Projection`	Specifies certain fields to return in the documents that match the query filter and is optional. To return all fields in the matching documents, omit this parameter.
- `Cursor`	A pointer to the result set of a query. This is the output of whatever documents you are finding and selecting from.
- `$eq`	This query operator will query documents that are equal to the specified value.
- `$ne`	Matches all documents that are not equal to the specified value.
- `$gt`	Matches all documents that are greater than the specified value.
- `$gte`	Matches all documents that are greater than or equal to the specified value.
- `$lt`	Matches all documents that are less than the specified value.
- `$lte`	Matches all documents that are less than or equal to the specified value.
- `$in`	Matches any of the values within an array.
- `$nin`	Matches none of the values within a specified array.
- `$and`	Performs a logical AND operation on an array of two or more expressions and selects the documents that satisfy all the expressions in the array.
- `$or`	Performs a logical OR operation on an array of two or more expressions and selects the documents that satisfy at least one of the expressions.
- `$not`	Performs a logical NOT operation on the specified operator-expression and selects the documents that do not match the operator-expression, including documents that do not contain the field.
- `$nor`	Performs a logical NOR operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array.
- `$exists`	Matches documents that contain a certain field, including documents that are null.
- `$type`	Returns documents where the BSON type of the field matches the BSON type passed.
- `$all`	Matches all documents where the value of a field is an array that contains all the specified elements.
- `$elemMatch`	Matches documents that contain an array field with at least one element that matches all the specified query criteria.
- `$size`	Selects documents that have an array with a specified size.
- `Projection Document`	Allows the returning of only some of the fields in the document, rather than the entire thing. Defined by either 1, which indicates that that field should be returned, or 0, which indicates to not return that field.

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
- `qty`: the quantity field (qty) has the value of
- `$in`: matches any of the values within an array.
  - `db.inventory.find( { qty: { $in: [ 5, 15 ] } } )`
- `$nin`: matches none of the values within a specified array.
  - `db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )`
##### Logical Query Operators
- `$and`: performs a logical AND operation on an array of two or more expressions and selects the documents that satisfy all the expressions in the array.
  - `db.inventory.find( { $and: [ { price: { $ne: 6.99 } }, { price: { $exists: true } } ] } )`
- `$or`: performs a logical OR operation on an array of two or more expressions and selects the documents that satisfy at least one of the expressions.
  - `db.inventory.find( { $or: [ { qty: { $lt: 20 } }, { price: 16.49 } ] } )`
- can combine $and and $or to do something:
  - cannot be constructed using an implicit AND operation using a comma because it uses the $or operator more than once.
```JSON
db.inventory.find( {
    $and : [
        { $or : [ { price : { $eq : 4.79 } }, { price : { $eq : 3.09 } } ] },
        { $or : [ { sale : true }, { qty : { $lt : 20 } } ] }
    ]
} )
```
- `$not`: performs a logical NOT operation on the specified operator-expression.
  - `db.inventory.find( { price: { $not: { $gt: 4.80 } } } )`
- `$nor`: performs a logical NOR operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array.
  - `db.inventory.find( { $nor: [ { price: { $gte : 5.99 } }, { sale: { $eq : true } } ] } )`
##### Element Query Operators
- `$exists`: Matches documents that contain a certain field, including documents that are null. 
- `$type`: returns documents where the BSON type of the field matches the BSON type passed to $type.
- `BSON` is a binary serialization format used to store documents and make remote procedure calls in MongoDB. 
  - [BSON Types](https://docs.mongodb.com/manual/reference/bson-types/#bson-types)
##### Array Query Operators
- `$all`: This query matches all documents where the value of a field is an array that contains all the specified elements.
  - `{ tags: { $all: [ "ssl" , "security" ] } }`
- `$elemMatch`: Matches documents that contain an array field with at least one element that matches all the specified query criteria.
  - `{ results: { $elemMatch: { $gte: 80, $lt: 85 } } }`
- `$size`: Selects documents that have an array with a specified size.
  - `db.collection.find( { field: { $size: 2 } } );`
  - specific field within a collection that has a size of 2. That means there are two values within the array.
##### Projection Document
- want to return only one or a few fields from a document rather than the whole thing.
  - `db.collectionName.find({query, projection})`
  - `db.collection.find( { query }, { field: <value>, field : <value>, etc} )`
  - The <value> can be either a 1 or a 0. 
  - The 1 indicated that you want to show the field and the 0 indicates that you do not want to show the field.
  - `db.appusers.find( { _id : 2}, { firstName: 1, lastName: 1 })`

### Updating Documents
#### Terms
- `db.collectionName.updateOne()`	Basic update query that will update one document based on the filter. It will update the first document that matches the filter.
- `db.collectionName.updateMany()`	Basic update query that will update many documents based on the filter.
- `db.collectionName.update()`	Combination of `updateOne()` and `updateMany()` queries. Default will only update the first document found based on the filter. If "multi" is set to true, it will update all documents that match the filter.
- `upsert`	An update option that can be used for any update method and needs a boolean value. If set to true, it will create a document if no document matches the criteria. Default is false.
- `multi`	The multi value is only used when a `update()` is queried. If set to true, it will update multiple documents that meet the query filter. The default value is false.
- `writeConcern`	An option that describes the level of acknowledgement requested from a MongoDB for write operations.
- `$currentDate`	Sets the value of a field to the current date. It can be set either as a Date or a Timestamp. If neither is specified, the default is Date.
- `$inc`	Increments a field by a specified value.
$min	Updates the value to a specified value if it is less than the current value of the field.
$max	Updates the value to a specified value if it is greater than the current value of the field.
- `$mul`	Multiplies the current value by the specified value.
- `$set`	Replaces the current value of a field with the specified value.
- `$unset`	An operator that will delete a particular field.
- `$rename`	Updates the name of a field.
- `replaceOne()`	This method will replace the entire contents of your document with a new document that you will specify in a command.
- `findOneAndReplace()`	Will replace a document based on the criteria but will return the current document before replacing its contents.
- `findOneAndUpdate()`	Will update a document based on the criteria but will return the current document before updating.
#### Update a Single Document
- `updateOne()` Basic update query that will update one document based on the filter. It will update the first document that matches the filter.
  - `db.[collection].updateOne({filter}, {update}, {options})`
  - `db.appusers.updateOne({"_id" : 1}, { $set : { "middleName" : "Gertrude"}}, { upsert : true})`
#### Update Many Documents
- it will find and update all documents that match the filter.
  - `db.appusers.updateMany({"firstName" : "Tommy"}, { $set : { "middleName" : "Henry"}}, { upsert : true})`
#### Using update()
- `update()` command has all of the functionality available to it that both the `updateOne()` and `updateMany()` methods have when combined.
  - option: `multi` is a boolean value
    - setting to true will make your `update()` to an `updateMany()`
    - setting to false will make your `update()` to an `updateOne()`
  - `db.[collection].update( {filter}, {update}, {upsert : true/or/false, multi: true/or/false})`
#### Update Options
- options are available when using any update query
- `db.[collection].updateOne({filter}, {update}, {options})`
##### upsert
- is a boolean, and if set to true, it will create a new document if no document matches the criteria
- If upsert is not defined, the default value is false and will not create a new document when no match is found.
- `db.[collection].update( {filter}, {update}, {upsert : true/false})`
##### multi
- is only used when an `update()` is queried. If it is set to true, it will update multiple documents that meet the query filter. 
- The default value is false which will update only one document. So when using `update()` and you want to update many documents, you must include the multi option in your query.
- `db.[collection].update( {filter}, {update}, {upsert : true/false, multi: true/false})`
##### writeConcern
- is an option available to you when running queries. 
- It describes the level of acknowledgment requested from a MongoDB for write operations. 
#### Update Operators
- `db.[collection].updateOne({filter}, {update}, {options})`

##### $currentDate
- Sets the value of a field to the current date. It can be set either as a Date or a Timestamp.
- `{ $currentDate : { <field> : <typeSpecification>, ... } }`
  - <field> will be whatever field to which you are updating the date.
  - <typeSpecification> can be either one of two things:
    - A boolean value when set to true, will set the current date as a Date.
    - A document that explicitly defines the type: { $type : "timestamp" } or { $type : "date"}.  case-sensitive and both "timestamp" and "date" must be lowercase.

##### $inc
- the field that you want to be incremented is defined, and then the amount for it to be incremented by is specified.
- `{ $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }`
- accepts positive and negative values
```JSON
{
  _id: 1,
  quantity: 10,
  metrics: {
    orders: 2,
    ratings: 3.5
  }
}
```
- `db.products.update({ _id: 1 }, { $inc: { quantity: -2, 'metrics.orders': 1 } })`;

##### $min
- `{ $min: { <field1>: <value1>, ...} }`
- operator will update the value to a specified value if it is less than the current value of the field.
- If the field does not exist, the `$min` operator will set the field to the specified value.
##### $max
- `{ $max: { <field1>: <value1>, ...} }`
- operator updates the value to a specified value if it is greater than the current value of the field.
- If the field does not exist, the `$max` operator will create and set the field to the specified value.
##### $mul
- `{ $mul: { field: <number> } }`
- operator will multiply the current value by the specified value. It will then set the value of the field to the product of the multiplication operation.
- If the field does not exist in a document, `$mul` creates the field and sets the value to zero.
##### $set
- `{ $set: { <field1>: <value1>, ... } }`
- operator replaces the current value of a field with the specified value.
- If the field does not exist, the `$set` operator will create and set the field to the specified value. This operator is used very frequently when updating documents.
##### $unset
- `{ $unset: { <field1>: "", ... } }`
- operator will delete a particular field.
- By defining the field name and using `""`, it will delete that field. If the field already does not exist, `$unset` will do nothing.
##### $rename
- `{$rename: { <field1>: <newName1>, <field2>: <newName2>, ... } }`
- operator updates the name of a field
- If the field you are trying to rename does not exist within the document, `$rename` will do nothing.
##### Replacing Documents
- `replaceOne()` method replace an entire document
- `db.[collection].replaceOne( {filter}, {replacement document}, {options})`
- `db.appusers.replaceOne({ _id: 2 }, { lastName: 'Beck', firstName: 'Rupert', age: 19, favoriteColor: 'green' })`
##### Find Replace and Update
- `findOneAndReplace()` method is used if you would like to return the original document before updating it.
- `db.scores.findOneAndReplace({ score: { $lt: 20000 } },{ team: 'Observant Badgers', score: 20000 });`
- `findOneAndUpdate()` query works the same way as findOneAndReplace. All you are doing is updating data instead of replacing. This query will also return the current document before updating it.

### Deleting and Indexing Documents
#### Terms
- `db.collectionName.deleteMany({})`	Will remove all documents from a collection. Can also delete many documents from a collection based on the filter.
- `db.collectionName.deleteOne({ <filter> })`	Will remove one document from a collection based on the filter.
- `db.collectionName.findOneAndDelete({ <filter> })`	Will return the current document before deleting based on a filter.
- `db.collectionName.drop()`	Drops the collection specified.
- `db.collectionName.createIndex( <key and index type specification>, <options> )`	This query will only create an index if an index with the same specifications does not exist already.
- `db.collectionName.getIndexes()`	Returns an array of all indexes in the specified collection.
- `db.collectionName.dropIndex()`	Drops an index in a specified collection. Can use either the index name or the specifications on which the index was created.
- `db.collectionName.dropIndexes()`	Drops all indexes in the specified collection.

#### Delete All Documents
- If you wanted to remove all documents from a collection
  - `db.collectionName.deleteMany({})`
- the collection will still exists, but it now contains zero documents.
#### Delete Documents with Filter
- you can pass in a filter to identify the documents to delete.
  - `db.cars.deleteMany({ used : true })`
- filter using query operators 
  - `db.cars.deleteMany({ price: { $lt : 30000 }})`
#### Delete One Document
- delete only one document, you could use the `deleteOne()` method. 
  - db.cars.deleteOne({ used : true })
- query operators to delete documents
  - `db.cars.deleteOne({ price: { $lt : 30000 }})`
#### Find and Delete
- `findOneAndDelete()` return the document you are deleting right before it is deleted 
  - `db.cars.findOneAndDelete({ price: 8000 })`
#### Delete a Collection
- wanted to delete a collection and along with all its documents.
  - `db.collectionName.drop();`
#### Indexes
- store small portions of documents in a form that is easy to traverse. The index stores a specific field, or set of fields, and is then ordered by the field. This ordering makes the search for the query match much more efficient.
- Default Index : creating a new collection, MongoDB creates a unique index on the _id field. This index that is created on the _id field cannot be dropped.
#### Create an Index
- want to create an index
  - `db.collection.createIndex( <key and index type specification>, <options> )`
- will only create an index if an index with the same specifications does not exist already.
##### Single and Compound Indexing
###### Single Field Indexing
- MongoDB supports the creation of ascending/descending indexes on a single field of a document.
- If you wanted to create an index on a field in ascending order, you would use the number 1 to define that.
  - `db.records.createIndex( { score: 1 } )`
- If you wanted the index to be in descending order, you would use -1 as the value:
  - db.records.createIndex( { score: -1 } )
###### Compound Indexing
- is where a single index structure references multiple fields within a collection's document.
- `db.collection.createIndex( { <field1>: <type>, <field2>: <type2>, ... } )`
- the value of the field within the createIndex will define either ascending (using 1) or descending (using -1) order.
- creating a compound index, the order in which you list the fields to be indexed is important. The index will sort the values of the first field, and then within each value of the first field, it will sort the values of the second field
#### Indexing on Embedded Fields and Documents
- create one on a field that is either an embedded document as a whole, or an embedded field
- Create Index on Embedded Field
  - you need to use the dot notation to define in which document the embedded document is located.
```JSON
{
  "_id": ObjectId("570c04a4ad233577f97dc459"),
  "score": 1034,
  "location": { state: "NY", city: "New York" }
}
```
  - `db.records.createIndex( { location.state: 1 } )`
- Create Index on Embedded Document
  - create indexes on embedded documents as a whole
  - `db.records.createIndex( { location: 1 } )`
- Multikey Indexes
  - index is created on a field that has an array as its value, MongoDB creates an index for each element in the array. 
  - make queries against arrays much more efficient. 
  - They can be created over arrays that hold either strings, or numbers, and nested documents.
  - If MongoDB sees that you have created an index on a field that holds an array as its value, it will automatically create a Multikey Index.
#### Viewing Your Indexes
- to look at the indexes you have created. use the `getIndexes()` method
- `db.cars.getIndexes();`
#### Dropping Indexes
- longer want to keep a specific index
  - `db.collectionName.dropIndex(<indexName>)`


### Sharding
