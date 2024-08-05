import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/index';
import { connection } from './config/database'
import "reflect-metadata";

//Connects to the Database -> then starts the express
connection.initialize()
  .then(async connection => {

    if(connection) {
      console.log('Connected to Database');
    }
    // Create a new express application instance
    const app = express();
    const port = process.env.PORT || 3000;

    // support application/json type post data
    app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: false }));

    //Set all routes from routes folder
    app.use("/api", routes);

    app.listen(port, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));
