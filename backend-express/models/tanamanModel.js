import db from '../database/db.js';

// Get all tanaman with penanganan
const getAllTanaman = async () => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT t.*, p.nama_penyakit, p.nama_hama, p.penanganan 
            FROM tanaman t
            LEFT JOIN penanganan p ON t.id_penanganan = p.id_penanganan
        `;
        db.query(sql, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Get tanaman by ID with penanganan
const getTanamanById = async (id_tanaman) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT t.*, p.nama_penyakit, p.nama_hama, p.penanganan 
            FROM tanaman t
            LEFT JOIN penanganan p ON t.id_penanganan = p.id_penanganan
            WHERE t.id_tanaman = ?
        `;
        db.query(sql, [id_tanaman], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Get tanaman by nama tanaman with penanganan
const getTanamanByName = async (nama_tanaman) => {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT t.*, p.nama_penyakit, p.nama_hama, p.penanganan 
            FROM tanaman t
            LEFT JOIN penanganan p ON t.id_penanganan = p.id_penanganan
            WHERE t.nama_tanaman = ?
        `;
        db.query(sql, [nama_tanaman], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Add new tanaman (no change needed here)
const addTanaman = async (nama_tanaman, deskripsi_tanaman, foto_tanaman) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO tanaman (nama_tanaman, deskripsi_tanaman, foto_tanaman) VALUES (?, ?, ?)';
        db.query(sql, [nama_tanaman, deskripsi_tanaman, foto_tanaman], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

// Update tanaman (no change needed here)
const updateTanaman = async (id_tanaman, nama_tanaman, deskripsi_tanaman, foto_tanaman) => {
    return new Promise((resolve, reject) => {
        const sql = `
            UPDATE tanaman 
            SET nama_tanaman = ?, deskripsi_tanaman = ?, foto_tanaman = ? 
            WHERE id_tanaman = ?
        `;
        db.query(sql, [nama_tanaman, deskripsi_tanaman, foto_tanaman, id_tanaman], (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

// Delete tanaman (no change needed here)
const deleteTanaman = async (id_tanaman) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM tanaman WHERE id_tanaman = ?';
        db.query(sql, [id_tanaman], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

export { getAllTanaman, getTanamanById, getTanamanByName, addTanaman, updateTanaman, deleteTanaman };
