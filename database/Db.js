import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'botanify1'
});

connection.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err.stack);
        return;
    }
    console.log('Terkoneksi ke database.');
});

export const query = (queryString, callback) => {
    connection.query(queryString, callback);
};
