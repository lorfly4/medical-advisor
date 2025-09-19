const mysql = require('mysql2/promise');

const db = async () => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medicaladvisor'
  });

  return connection;
};

module.exports = db;
