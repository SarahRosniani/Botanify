import express from 'express';
import blogRouter from '../Botanify/route/Blogroute.js'; 

const app = express();

app.use(express.json()); 

console.log('Menambahkan /blogb rute'); 

app.use('/blogb', blogRouter); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Terjadi kesalahan!');
});

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
