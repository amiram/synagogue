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

app.use((err, req, res, next) => {
  logger.error(err);
  process.exit(1);
});

process.on('unhandledException', (err) => {
  logger.error(err);
  process.exit(1);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`api started. listening on port ${port}`);
});
