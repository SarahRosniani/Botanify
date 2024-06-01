import { query as _query } from '../database/Db.js'; 

const getBlog = (req, res) => {
    const query = 'SELECT * FROM blog'; 
    _query(query, (err, results) => {
        if (err) {
            console.error("Database query error:", err);
            return res.status(500).json({ error: err.message });
        }
        console.log("Query results:", results); 
        res.status(200).json(results);
    });
};

export default { getBlog };
