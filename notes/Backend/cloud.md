# Backend

## Cloud Hosting Platforms
- Cloud providers offer services to their customers in a general pay-per-usage model so the customer’s companies can scale up and down on an as-needed basis dependent on usage, business requirements, and growth of the organization. 
- use a virtualization software
- servers that can be deployed quickly, backed up regularly, and scaled to size
- hardware is no longer the constraint, as the cloud provider supplies near limitless computing and networking resources virtually with additional capacity being able to be procured instantly to meet any new demands on the systems.
- Cloud Providers:
  - AWS (Amazon Web Services)
  - Microsoft Azure 
  - Google 
  - IBM Db2
  - Oracle

## Cloud Databases
- key reasons that cloud databases provide an edge for many organizations over the implementation of on-premise database solutions.
### Ease of access
- service reaches nearly all locations in the world and provides quick, efficient access through strategic placement of datacenters, content distribution locations, and network endpoints
### Scalability
- essentially provides unlimited computer and storage capability to the customer base as they can choose the appropriate size for the server in the cloud platform portal and they can scale it on the fly as needed.
### Disaster recovery
- cloud databases have a default configuration that includes redundant backups, read-only copies, and snapshots to ensure that in the event of any failures that the data can be captured and effectively restored.

## AWS (Amazon Web Services)
- relational database:
  - Aurora
    - compatible with MySQL and PostgreSQL
    - features:
      - Up to 5x faster than MySQL
      - Up to 1/10th the cost
      - Fully managed (provisioning, backups, setup)
      - Highly available, durable, and secure
  - Amazon RDS
    - Can be provisioned on several database instance types optimized for memory, performance, or input/output
    - Provides six familiar database engines: Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle DB, SQL Server
    - Easy to administer: through RDS Management console, AWS RDS command-line interface, or API calls
    - Highly scalable: scale up and down instantly with a few clicks
    - Highly available, fast, durable, and secure
  - Amazon Redshift
    - Query huge data sets such as data lakes or warehouses with standard SQL.

-  NoSQL:
  - DynamoDB
    - compatible with MongoDB
    - Key-value
  
## Azure
- Azure SQL Database
  - Traditional relational databases built on Microsoft SQL servers
- Azure Cosmos DB
  - Build applications with guaranteed low latency and high availability anywhere, at any scale, or migrate Cassandra, MongoDB, and other NoSQL workloads to the cloud.
- Azure Database for MySQL
  - Deliver high availability and elastic scaling to open-source mobile and web apps with a managed community MySQL database service, or migrate MySQL workloads to the cloud.
- Azure Database for PostgreSQL
  - Build scalable and secure enterprise-ready apps on community PostgreSQL, scale out single-node PostgreSQL with high performance, or migrate PostgreSQL and Oracle workloads to the cloud.
- Azure Database for MariaDB
  - Deliver high availability and elastic scaling to open-source mobile and web apps with a managed community MariaDB database service.
- SQL Server on Virtual Machines
  - Run SQL Server apps in the cloud on virtual machine instances with seamless scaling and pay-per-minute pricing, or migrate SQL Server or Oracle workloads to the cloud.
