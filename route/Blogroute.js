import express from 'express';
import blogController from '../controller/Blogctrl.js';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Memanggil getBlog'); 
    blogController.getBlog(req, res);
}); // Menggunakan root path untuk /blogb

export default router;
