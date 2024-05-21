import pool from "@/databse/db";

export default async function handler(req, res) {
  const { id } = req.body;
  try {
    const [result] = await pool.query("DELETE FROM Todo WHERE id = ?", [id]);
    res.status(202).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
