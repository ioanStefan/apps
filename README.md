# HRT WEB Applications Platform

> Please do not modify any of these files without following instructions.

**System requirements**
1. Node JS version - 8.11.4 LTS
2. NPM version - 6.4
3. Mongo database server version - Community Server Stable Release 4.0.1
4. PM2 version - 3.0.3
5. OS - Windows (7 or later) / Linux (Ubuntu) / MacOS (High Sierra)

**Instalation instructions** *it is assumed that you already have installed node js and npm*
1. Open a terminal on the current directory and run **npm install** on application folder. This command will install all application dependencies.
2. On the same terminal install pm2 manager: **npm install -g pm2**. This manager is used to manage Node applications. You can learn more about pm2 at: [text](http://pm2.keymetrics.io/).
3. Into config/config.js file set up your secret key and your database host, port and database name (default database name is a5sdb, default port for a mongodb server is 27017).
4. Collections are stored under dump/a5sdb directory. If the mongodb server is not on the same machine as the application, copy dump folder to mongodb server machine and execute the following step there.
5. Open a terminal in the current directory and run **mongorestore --host {db_host} --port {db_port} --collection {collection_name} --db {db_name} dump/a5sdb/{collection_name}.bson** for every collection (ex. *mongorestore --host 192.168.1.10 --port 27017 --collection users --db a5sdb dump/a5sdb/users.bson* .
6. Under bin/www you can change application port (default is 3000). It is not necessary to get it from the environment.
7. Open a terminal on the current directory and run **pm2 start bin/www**. This command will start the application.
8. Have fun!

**Default user credentials**
> Username: admin
> Password: system

> Default user has the role of Administrator and can manage users, role and settings. Has no permissions to use other features of the applications.

Owned by HARTING

Developed by &copy; QDEV Software Concept 2018
