const mysql = require('mysql');
const dbconf = require('./dbconf');

const conn = mysql.createConnection({
    host: dbconf.HOST,
    user: dbconf.USER,
    password: dbconf.PASSWORD,
    database: dbconf.DB
});

conn.connect(error => {
    if (error) throw error;
    console.log('Conexion exitosa');
});

module.exports = conn;