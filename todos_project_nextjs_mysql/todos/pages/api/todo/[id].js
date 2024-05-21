import pool from "../../../databse/db";

export default async function handler(req, res) {
  console.log(req.query);
  const [rows] = await pool.query("SELECT * FROM Todo where id=?", [
    req.query.id,
  ]);
  res.status(200).json(rows);
}
