let stokKoperasi = [
  "Buku Tulis",
  "Pulpen",
  "Pensil",
  "Sabun Mandi",
  "Shampo",
  "Snack Wafer",
];

console.log("Stok awal:", stokKoperasi);

stokKoperasi.push("Penghapus", "Sikat Gigi");
console.log("Stok setelah restock 2 barang baru:", stokKoperasi);

stokKoperasi.unshift("Minuman Cokelat");
console.log("Stok setelah barang promo ditambahkan:", stokKoperasi);

let barangTerjualHabis = stokKoperasi.shift();
console.log("Barang pertama terjual habis:", barangTerjualHabis);
console.log("Stok setelah barang pertama dihapus:", stokKoperasi);

let barangRusak = stokKoperasi.pop();
console.log("Barang terakhir rusak dan ditarik:", barangRusak);
console.log("Stok setelah barang terakhir dihapus:", stokKoperasi);

stokKoperasi.splice(2, 1, "Pensel");
console.log("Stok setelah salah input:", stokKoperasi);

// Koreksi menggunakan splice()
stokKoperasi.splice(2, 1, "Pensil");
console.log("Stok setelah koreksi data:", stokKoperasi);

stokKoperasi.splice(3, 0, "Keripik Singkong");
console.log("Stok setelah barang konsinyasi disisipkan:", stokKoperasi);

if (stokKoperasi.includes("Sabun Mandi")) {
  console.log("Sabun Mandi: Tersedia");
} else {
  console.log("Sabun Mandi: Tidak tersedia");
}

let posisiPulpen = stokKoperasi.indexOf("Pulpen");

if (posisiPulpen !== -1) {
  console.log("Pulpen ditemukan pada indeks:", posisiPulpen);
} else {
  console.log("Barang tidak ditemukan di rak");
}

let laporanMingguan = stokKoperasi.slice(0, 3);

console.log("Laporan mingguan (3 barang teratas):", laporanMingguan);
console.log("Stok asli tetap:", stokKoperasi);

console.log("=== DAFTAR STOK AKHIR ===");

for (let i = 0; i < stokKoperasi.length; i++) {
  console.log(`${i + 1}. ${stokKoperasi[i]}`);
}

let daftarBarang = stokKoperasi.join(", ");

console.log("Daftar stok dalam bentuk teks:");
console.log(daftarBarang);
