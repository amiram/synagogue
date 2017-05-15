const express = require('express');
const logger = require('./logger');
const routes = require('./modules/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('./db');

app.use(cors());
app.use(bodyParser());
app.use(express.static('../www'));

const router = express.Router();
routes(router);

app.use('/api', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`api started. listening on port ${port}`);
});
