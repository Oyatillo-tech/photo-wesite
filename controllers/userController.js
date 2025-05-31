const pool = require("../config/db");

exports.singUp = async (req, res) => {
 try {
  const { firstname, lastname, username, password } = req.body;
  const test = await pool.query(
   `SELECT * FROM users WHERE username = $1 LIMIT 1`,
   [username]
  );

  if (test.rows.length > 0) {
   return res.status(401).json({ message: "Username already exists" });
  }
  const result = await pool.query(
   `insert into users(firstname, lastname, username, password) values ($1, $2, $3, $4) returning *`,
   [firstname, lastname, username, password]
  );
  res.status(201).json(result.rows);
 } catch (error) {
  console.log(error);
  res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
 }
};
exports.logIn = async (req, res) => {
 try {
  const { username, password } = req.body;
  const result = await pool.query(
   `SELECT id, firstname, lastname, username FROM users WHERE username = $1 and password = $2`,
   [username, password]
  );
  if (result.rows.length === 0) {
   return res.status(404).json({ message: "Invalid username or password" });
  }
  res.status(200).json({ user: result.rows[0] });
 } catch (error) {
  console.log(error);
  res.status(500).send("Girigitton kodida nomaqbul hatolik mavjud");
 }
};