import pool from "../../../databse/db";

export default async function handler(req, res) {
  const [rows] = await pool.query("SELECT * FROM Todo");
  res.status(200).json(rows);
}
