const Student = require("../models/Student");

class StudentController {
  // Mendapatkan seluruh resource
  async index(req, res) {
    const students = await Student.all();

    const data = {
      message: "Menampilkan data student",
      data: students,
    };

    res.json(data);
  }

  // Menambahkan data student baru
  async store(req, res) {
    const { nama } = req.body;

    // Simpan data ke database menggunakan model
    const student = await Student.create({ nama });

    const data = {
      message: `Menambahkan data student ${nama}`,
      data: student,
    };

    res.json(data);
  }

  // Menampilkan detail resource berdasarkan ID
  async show(req, res) {
    const { id } = req.params;

    // Cari student berdasarkan ID
    const student = await Student.find(id);

    if (student) {
      const data = {
        message: `Menampilkan detail student dengan ID ${id}`,
        data: student,
      };

      res.json(data);
    } else {
      res.status(404).json({
        message: `Student dengan ID ${id} tidak ditemukan`,
      });
    }
  }

  // Memperbarui resource berdasarkan ID
  async update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // Update data student berdasarkan ID
    const updated = await Student.update(id, { nama });

    if (updated) {
      const data = {
        message: `Memperbarui data student dengan ID ${id}`,
        data: { id, nama },
      };

      res.json(data);
    } else {
      res.status(404).json({
        message: `Student dengan ID ${id} tidak ditemukan`,
      });
    }
  }

  // Menghapus resource berdasarkan ID
  async destroy(req, res) {
    const { id } = req.params;

    // Hapus student berdasarkan ID
    const deleted = await Student.delete(id);

    if (deleted) {
      const data = {
        message: `Menghapus data student dengan ID ${id}`,
      };

      res.json(data);
    } else {
      res.status(404).json({
        message: `Student dengan ID ${id} tidak ditemukan`,
      });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
