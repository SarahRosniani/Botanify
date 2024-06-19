import dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';
import mysql from 'mysql2/promise';

dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const detectPlant = async (req, res) => {
  try {
    const { file } = req;

    // Untuk memastikan file telah diunggah dengan benar
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);

    console.log('Sending request to backend-ai with file:', file.originalname);
    console.time('backend-ai request');

    const response = await axios.post('http://localhost:5000/result', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    });

    console.timeEnd('backend-ai request');
    console.log('Received response from backend-ai:', response.data);

    const { category } = response.data;

    console.log('Predicted category:', category);
    console.log('Starting database query for tanaman');
    console.time('database query for tanaman');

    const [rows] = await db.execute('SELECT t.*, p.nama_penyakit, p.nama_hama, p.penanganan FROM tanaman t LEFT JOIN penanganan p ON t.id_penanganan = p.id_penanganan WHERE t.nama_tanaman = ?', [category]);

    console.timeEnd('database query for tanaman');
    console.log('Database query result:', rows);

    if (rows.length === 0) {
      console.log('No tanaman found for category:', category);
      return res.status(404).json({ error: "Tanaman tidak ditemukan" });
    }

    const tanamanData = rows[0];

    console.log('Final tanaman data:', tanamanData);
    res.status(200).json({ data: tanamanData });
  } catch (error) {
    console.error('Error during plant detection:', error);

    // Log error
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }

    res.status(500).json({ error: "Terjadi kesalahan saat deteksi tanaman", details: error.message });
  }
};


export const getAllTanaman = async (req, res) => {
    try {
        const result = await fetchAllTanaman();
        return res.status(200).json({ data: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Terjadi kesalahan saat mengambil Tanaman" });
    }
};

export const getTanamanById = async (req, res) => {
    const { id_tanaman } = req.params;
    try {
        const result = await fetchTanamanById(id_tanaman);
        if (result.length === 0) {
            return res.status(404).json({ message: "Tanaman tidak ditemukan" });
        }
        return res.status(200).json({ data: result[0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Terjadi kesalahan saat mengambil Tanaman" });
    }
};

export const getTanamanByName = async (req, res) => {
    const { nama_tanaman } = req.params;
    try {
        const result = await fetchTanamanByName(nama_tanaman);
        if (result.length === 0) {
            return res.status(404).json({ message: "Tanaman tidak ditemukan" });
        }
        return res.status(200).json({ data: result[0] });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Terjadi kesalahan saat mengambil Tanaman" });
    }
};

export const createTanaman = async (req, res) => {
    const { nama_tanaman, deskripsi_tanaman, foto_tanaman } = req.body;

    try {
        const result = await addTanaman(nama_tanaman, deskripsi_tanaman, foto_tanaman);
        res.status(201).json({ id: result.insertId, nama_tanaman, deskripsi_tanaman, foto_tanaman });
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

export const updateTanaman = async (req, res) => {
    const { id_tanaman } = req.params;
    const { nama_tanaman, deskripsi_tanaman, foto_tanaman } = req.body;

    try {
        const result = await modifyTanaman(id_tanaman, nama_tanaman, deskripsi_tanaman, foto_tanaman);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tanaman tidak ditemukan" });
        }
        return res.status(200).json({
            message: "Sukses update tanaman",
            data: { id_tanaman, nama_tanaman, deskripsi_tanaman, foto_tanaman }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Terjadi kesalahan saat update Tanaman" });
    }
};

export const deleteTanaman = async (req, res) => {
    const { id_tanaman } = req.params;
    try {
        const result = await removeTanaman(id_tanaman);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tanaman tidak ditemukan" });
        }
        return res.status(200).json({ message: "Tanaman sukses terhapus" });
    } catch (error) {
        console.error("Error details:", error);
        return res.status(500).json({ error: "Terjadi kesalahan saat menghapus Tanaman", details: error.message });
    }
};

// dotenv.config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// export const detectPlant = async (req, res) => {
//     try {
//         const { file } = req;

//         const formData = new FormData();
//         formData.append('file', file.buffer, file.originalname);

//         console.log('Sending request to backend-ai with file:', file.originalname);
//         console.time('backend-ai request');

//         const response = await axios.post('http://localhost:5000/result', formData, {
//             headers: {
//                 ...formData.getHeaders(),
//             },
//         });

//         console.timeEnd('backend-ai request');
//         console.log('Received response from backend-ai:', response.data);

//         const { category } = response.data;

//         console.log('Predicted category:', category);
//         console.log('Starting database query for tanaman');
//         console.time('database query for tanaman');

//         const [rows] = await db.execute('SELECT t.*, p.nama_penyakit, p.nama_hama, p.penanganan FROM tanaman t LEFT JOIN penanganan p ON t.id_penanganan = p.id_penanganan WHERE t.nama_tanaman = ?', [category]);

//         console.timeEnd('database query for tanaman');
//         console.log('Database query result:', rows);

//         if (rows.length === 0) {
//             console.log('No tanaman found for category:', category);
//             return res.status(404).json({ error: "Tanaman tidak ditemukan" });
//         }

//         const tanamanData = rows[0];

//         console.log('Final tanaman data:', tanamanData);
//         res.status(200).json({ data: tanamanData });
//     } catch (error) {
//         console.error('Error during plant detection:', error);

//         // Log detailed error
//         if (error.response) {
//             console.error('Response data:', error.response.data);
//             console.error('Response status:', error.response.status);
//             console.error('Response headers:', error.response.headers);
//         } else if (error.request) {
//             console.error('Request data:', error.request);
//         } else {
//             console.error('Error message:', error.message);
//         }

//         res.status(500).json({ error: "Terjadi kesalahan saat deteksi tanaman", details: error.message });
//     }
// };

// import dotenv from 'dotenv';
// import { getAllTanaman as fetchAllTanaman, getTanamanById as fetchTanamanById, addTanaman, getTanamanByName as fetchTanamanByName, updateTanaman as modifyTanaman, deleteTanaman as removeTanaman } from '../models/tanamanModel.js';
// import axios from 'axios';
// import FormData from 'form-data';
// import mysql from 'mysql2/promise';  // Import MySQL2

// dotenv.config();

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// export const detectPlant = async (req, res) => {
//     try {
//         const { file } = req;

//         const formData = new FormData();
//         formData.append('file', file.buffer, file.originalname);

//         console.log('Sending request to backend-ai with file:', file.originalname);

//         const response = await axios.post('http://localhost:5000/result', formData, {
//             headers: {
//                 ...formData.getHeaders(),
//             },
//         });

//         console.log('Received response from backend-ai:', response.data);

//         const { category } = response.data;

//         console.log('Predicted category:', category);

//         // Fetch tanaman data based on predicted category
//         const [rows, fields] = await db.execute('SELECT * FROM tanaman WHERE nama_tanaman = ?', [category]);

//         console.log('Database query result:', rows);

//         if (rows.length === 0) {
//             return res.status(404).json({ message: "Tanaman tidak ditemukan" });
//         }

//         res.status(200).json({ data: rows[0] });
//     } catch (error) {
//         console.error('Error during plant detection:', error);
//         res.status(500).json({ error: "Terjadi kesalahan saat deteksi tanaman" });
//     }
// };