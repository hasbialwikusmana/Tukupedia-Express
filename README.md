<h1 align="center">ExpressJS - Tukupedia RESTfull API</h1>

This project is the backend of my project, Tukupedia. Its main purpose is to make it easier for customers to order products online and make it easier for owners to store data online in the database.

Tukupedia is an online shop website application inspired by Tokopedia and this application is better known as the Point Of Sale Application. This app provides your needs to improve your business. With this application, you can monitor sales transactions that occur, without having to be at the store location that you have. What's more, apart from functioning as monitoring, point of sale applications can also allow you to get real-time sales data.

<!-- Proyek ini adalah backend dari proyek saya, Tukupedia. Tujuan utamanya adalah untuk memudahkan pelanggan melakukan pemesanan produk secara online dan memudahkan pemilik untuk menyimpan data secara online di database.

Tukupedia adalah aplikasi website toko online yang terinspirasi dari Tokopedia dan aplikasi ini lebih dikenal dengan Aplikasi Point Of Sale. Aplikasi ini menyediakan kebutuhan Anda untuk meningkatkan bisnis Anda. Dengan aplikasi ini, Anda dapat memantau transaksi penjualan yang terjadi, tanpa harus berada di lokasi toko yang Anda miliki. Terlebih lagi, selain berfungsi sebagai monitoring, aplikasi point of sale juga dapat memungkinkan Anda untuk mendapatkan data penjualan secara real-time -->

[More about Express](https://en.wikipedia.org/wiki/Express.js)

Some of the advantages of this application are :

1. Time Efficiency
2. Low Maintenance Fee
3. Build more trust in your customers
4. Help increase profits
5. Minimize errors in your report data
6. Can access anywhere
7. Can be used on any device

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.17.1-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.18.2-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## Installation Version 2 (Intermediate Backend)

5. <a href="https://www.npmjs.com/package/cors">CORS</a>
6. <a href="https://www.npmjs.com/package/jsonwebtoken">JsonWebToken</a>
7. <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
8. <a href="https://www.npmjs.com/package/multer">Multer</a>
9. <a href="https://www.npmjs.com/package/redis">Redis</a>

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Create a database with the name `tukupedia`, using database in others/database tukupedia.sql **postgreSQL**
5. Open Postman desktop application or Chrome web app extension that has installed before
6. Choose HTTP Method and enter request url.(ex. localhost:3000/)
7. You can see all the documentation postman [here](#Documentation-Postman)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
#DATABASE POSTGRESQL

PGHOST= //host Database
PGUSER= //postgreSQL user
PGDATABASE= //database name
PGPASSWORD= //database password
PGPORT= //database port

#PORT SERVER

PORT = //exServer port
```

## Documentation Postman

**See Documentation API [Here](https://documenter.getpostman.com/view/12329591/UyxeqUpQ)**

### License

© [Hasbi Alwi Kusmana](https://github.com/hasbialwikusmana)
