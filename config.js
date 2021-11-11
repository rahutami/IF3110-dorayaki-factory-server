require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: "mysql",
    database: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.SECRET,
  },
  mail: {
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
    host: process.env.MAIL_HOST,
  },
};

module.exports = config;
