# Eat-Da-Burger

###### Written in node.js by Jackson Oppenheim

https://eat-da-burger-jacksonopp.herokuapp.com/

---

### What is Eat-Da-Burger?

Friend-Finder full stack web-app where you can enter a burger on a name, and it will add it to a mySQL database, and update the page with your new entry to the database. You can then chose to devour your burger, and it will update on the server and move your burger over to the devoured section.

### NPM Dependencies

-  axios 0.19.0
-  express 4.17.1
-  express-handlebars 3.1.0
-  mysql 2.14.1
-  mysql2 1.7.0
-  nodemon 1.19.2 (for testing and development purposes)
-  sequelize 5.19.0

### Database

The database is a mySQL database that is accessed through an restful API using sequelize as an ORM.

### Organization

```
project
│   README.md
│   package.json
|   LICENSE - this is our MIT license
│   server.js - this our express server
│
└───config
    |   config.json - this contains our configuration for connecting to our sql database

└───models
    |   index.js - allows the server to interact with the tables in our database
    |   burger.js - this is the sequelize schema for our burger table

└───public
    └───css
        |   index.css - this contains our styling
    └───img
        |   burger.png - this is the burger logo at the top of the page
    └───js
        |   requests.js - this contains the front end axios requests

└───routds
    │   apiRoutes.js - this contains all of the routing information for API requests
    │   htmlRoutes.js - this contains all of the routing information for HTML requests

└───sql
    |   schema.sql - this contains our initial sql schema. It is overwritten by sequelize
    |   seeds.sql - this contains a informaion to seed our database

└───views
    │   index.handlebars - this contains the main page
    └───layouts
        |   main.handlebars - this is the main handlebars layout page


```

#### License

This application is under the MIT licence.
