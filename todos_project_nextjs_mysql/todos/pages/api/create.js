// import pool from "../../../databse/db";
import pool from "../../databse/db";

export default async function handler(req, res) {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO Todo (title, description) VALUES (?, ?)",
      [title, description]
    );
    res.status(201).json({ id: result.insertId, title, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
