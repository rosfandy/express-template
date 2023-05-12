const express   = require('express')
const app       = express()
const http      = require("http");
const morgan    = require('morgan');
const cors      = require('cors')

const bodyParser = require('body-parser')
const routes     = require('./routes/router')

const corsConfig = {
  credentials: true,
  origin: true,
};

// konfigurasi express
app.use(cors(corsConfig));
app.use(express.json());
app.enable("trust proxy");
// use morgan middleware to log HTTP requests
app.use(morgan('dev'));

// routes-module : endpoint
app.use(routes)

// init server
const init = ()=>{
  let port = process.env.PORT || 8080;
  app.set("port", port);
  let server = http.createServer(app);
  server.listen(port);
  server.on("listening", () => {
    console.log(`Server is listening on port ${port}`);
  });
}

init();
