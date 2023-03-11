const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'db',
    password: config.dbPassword 
});

connection.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('db connected :D');
});

// Promisify
const query = async (sql, values=undefined) => {
    return new Promise((resolve, reject) =>{
        connection.query(sql, values, (err, data) => {
            if(err) {
                reject(err);
            }

            resolve(data);
        })
    });
}

module.exports = { query }