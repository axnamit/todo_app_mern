require("dotenv").config();

// Read the config and other information from env file
var mode = process.env.MODE.toLowerCase();
var db_type = process.env.DB_TYPE;

if (mode == "production") {
  db_host = process.env.DB_HOST_PRODUCTION;
  db_port = process.env.DB_PORT_PRODUCTION;
  db_uri = process.env.DB_URI_PRODUCTION;
  db_secret = process.env.DB_SECRET_PRODUCTION;
} else {
  db_host = process.env.DB_HOST_DEVELOPMENT;
  db_port = process.env.DB_PORT_DEVELOPMENT;
  db_uri = process.env.DB_URI_DEVELOPMENT;
  db_secret = process.env.DB_SECRET_DEVELOPMENT;
}

module.exports = {
  mongoURI: db_type + "://" + db_host + ":" + db_port + "/" + db_uri,
  PORT: process.env.SERVER_PORT,
};
