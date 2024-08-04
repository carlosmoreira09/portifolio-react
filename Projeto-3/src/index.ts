import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes/index';
import "reflect-metadata"
import { connection } from './config/database'

const app = express();
const port = process.env.PORT || 3000;

connection.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//...
// applying the routes to the basepath '/api'
app.use('/api', routes);

app.listen(port, () => {
  console.log('Listening on port', port);
})