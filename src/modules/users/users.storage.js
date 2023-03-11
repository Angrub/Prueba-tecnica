const { query } = require('../../database');

const selectAll = async () => {
    const sql = 'SELECT * FROM Users;';
    const users = await query(sql);

    return users
}

const insert = async (data) => {
    const sql = 'INSERT Users INTO (level, name, lastname, username, password) VALUES (?, ?, ?, ?, ?)';
    await query(sql, data);
}


module.exports = {
    selectAll,
    insert
}