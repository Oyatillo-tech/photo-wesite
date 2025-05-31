const pool = require("../config/db");

exports.getPhotos = async (req, res) => {
 try {
  const { userId } = req.query;
  let result;
  if (userId) {
   result = await pool.query("SELECT * FROM photos WHERE userId = $1", [
    userId,
   ]);
   return res.status(200).json(result.rows);
  }
  result = await pool.query(
   `select p.id, p.url, CONCAT(u.firstname, ' ', u.lastname) as fullname 
       from photos p
       inner join users u
       on p.userId = u.id`
  );
  res.status(200).json(result.rows);
 } catch (error) {
  console.log(error);
  res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
 }
}

exports.deletePhotos = async (req, res) => {
 try {
  const id = req.params.id;
  const result = await pool.query("delete from photos where id=$1", [id]);
  res.json({ message: "Muvaffaqiyatli o'chirildi" })
 } catch (error) {
  console.log(error);
  res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
 }
}

exports.postPhoto = async (req, res) => {
 try {
  const { url, userId } = req.body;
  const result = await pool.query(
   "INSERT INTO photos (url, userId) VALUES ($1, $2) RETURNING *",
   [url, userId]
  );

  res.status(201).json(result.rows[0]);
 } catch (error) {
  console.log(error);
  res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
 }
};