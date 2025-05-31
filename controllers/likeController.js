const pool = require("../config/db");

exports.likePhotos = async (req, res) => {
 try {
  const { photoId, userId } = req.body;
  const result = await pool.query(
   'INSERT INTO likes (photoId, userId) VALUES ($1, $2) RETURNING *',
   [photoId, userId]
  );
  res.status(201).json(result.rows[0]);
 }
 catch (error) {
  console.log(error);
  res.status(500).send('Girigitton kodida nomaqbul hatolik mavjud');
 }
};
