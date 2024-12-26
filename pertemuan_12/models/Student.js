const db = require("../config/database"); // Pastikan Anda memiliki konfigurasi database

class Student {
  // Mendapatkan semua data student
  static async all() {
    const query = "SELECT * FROM students"; // Asumsikan tabel bernama 'students'
    const [rows] = await db.execute(query);
    return rows;
  }

  // Menambahkan data student baru
  static async create(data) {
    const query = "INSERT INTO students (nama) VALUES (?)";
    const [result] = await db.execute(query, [data.nama]);
    return {
      id: result.insertId,
      ...data,
    };
  }

  // Mencari data student berdasarkan ID
  static async find(id) {
    const query = "SELECT * FROM students WHERE id = ?";
    const [rows] = await db.execute(query, [id]);
    return rows.length ? rows[0] : null;
  }

  // Memperbarui data student berdasarkan ID
  static async update(id, data) {
    const query = "UPDATE students SET nama = ? WHERE id = ?";
    const [result] = await db.execute(query, [data.nama, id]);
    return result.affectedRows > 0;
  }

  // Menghapus data student berdasarkan ID
  static async delete(id) {
    const query = "DELETE FROM students WHERE id = ?";
    const [result] = await db.execute(query, [id]);
    return result.affectedRows > 0;
  }
}

module.exports = Student;
