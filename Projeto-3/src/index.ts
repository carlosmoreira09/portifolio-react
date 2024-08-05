import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/index';
import { connection } from './config/database'
import "reflect-metadata";
import * as path from 'node:path'

//Connects to the Database -> then starts the express
connection.initialize()
  .then(async connection => {

    if(connection) {
      console.log('Connected to Database');
    }
    // Create a new express application instance
    const app = express();
    const port = process.env.PORT || 3000;
// Set EJS as the view engine
    app.set("view engine", "ejs");

// Set the views directory
    //setup public folder
    app.use(express.static('./public'));
    app.set("views", path.join(__dirname, "views"));
    // support application/json type post data
    app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    app.use(bodyParser.urlencoded({ extended: false }));

    //Set all routes from routes folder
    app.use("/api", routes);
    app.get("/", (req, res) => {
      res.render("pages/login");
    });

    app.listen(port, () => {
      console.log("Server started on port 3000!");
    });
  })
  .catch(error => console.log(error));
