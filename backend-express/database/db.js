import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database:', connection.threadId);
    connection.release(); 
});

export const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to database:', connection.threadId);
        connection.release(); 
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export default pool;
