const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: 3000,
  env: process.env.NODE_ENV,
  db: {
    user: process.env.DBCP_RAC8_RACING_USERNAME,
    password: process.env.DBCP_RAC8_RACING_PASSWORD,
    connectString: process.env.DBCP_RAC8_RACING_URL,
    schema: process.env.DBCP_RAC8_RACING_SCHEMA,
  },
};
