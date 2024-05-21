import pool from "../../databse/db";

export default async function handler(req, res) {
  const { id, title, description } = req.body;
  try {
    const [result] = await pool.query(
      "UPDATE Todo SET title = ?, description = ? WHERE id = ?",
      [title, description, id]
    );
    res.status(200).json({ id, title, description });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
