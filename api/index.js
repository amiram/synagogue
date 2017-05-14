const express = require('express');
const logger = require('./logger');
const routes = require('./modules/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

require('./db');

app.use(cors());
app.use(bodyParser());

routes(app);

app.listen(process.env.$PORT || 3000, () => {
  logger.info('api started');
});
