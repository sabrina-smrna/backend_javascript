// import data fruits
const fruits = require("./data.js");

// membuat fungsi index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// membuat fungsi store untuk menambah buah baru
const store = (name) => {
  if (!name) {
    console.log("Nama buah tidak boleh kosong.");
    return;
  }
  fruits.push(name);
  console.log(`Buah '${name}' telah ditambahkan.`);
  index();
};

// membuat fungsi update untuk memperbarui buah
const update = (oldName, newName) => {
  const indexToUpdate = fruits.indexOf(oldName);
  if (indexToUpdate === -1) {
    console.log(`Buah '${oldName}' tidak ditemukan.`);
    return;
  }
  fruits[indexToUpdate] = newName;
  console.log(`Buah '${oldName}' telah diperbarui menjadi '${newName}'.`);
  index();
};

// membuat fungsi destroy untuk menghapus buah
const destroy = (name) => {
  const indexToDelete = fruits.indexOf(name);
  if (indexToDelete === -1) {
    console.log(`Buah '${name}' tidak ditemukan.`);
    return;
  }
  fruits.splice(indexToDelete, 1);
  console.log(`Buah '${name}' telah dihapus.`);
  index();
};

// export method index, store, update, dan destroy
module.exports = { index, store, update, destroy };
