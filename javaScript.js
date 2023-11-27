//Latihan JavaScript 17/11/2023
//NOMOR 1
console.log('=================\nlevel 1 nomor 1')
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//NOMOR 2
console.log('=================\nlevel 1 nomor 2')
var Umur = parseInt(prompt("masukkan umur anda"));
if (Umur > 6) {
  console.log("harus bayar tiket");
} else {
  if (!Number.isInteger(Umur)) {
    console.log("masukkan angka");
  } else {
    console.log("tidak harus bayar tiket");
  }
}

//NOMOR 3
console.log('=================\nlevel 1 nomor 3')
var namaHari = prompt("masukkan nama hari(Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu)");
switch (namaHari) {
  case "Senin":
    console.log(
      "Jam kerja dimulai dari pukul 07.30 sampai 16.30 dengan penanggung jawab piket : Anisa"
    );
    break;
  case "Selasa":
    console.log(
      "Jam kerja dimulai dari pukul 08.00 sampai 17.00 dengan penanggung jawab piket : Berlyn"
    );
    break;
  case "Rabu":
    console.log(
      "Jam kerja dimulai dari pukul 08.00 sampai 17.00 dengan penanggung jawab piket : Dani"
    );
    break;
  case "Kamis":
    console.log(
      "Jam kerja dimulai dari pukul 08.00 sampai 17.00 dengan penanggung jawab piket : Fema"
    );
    break;
  case "Jumat":
    console.log(
      "Jam kerja dimulai dari pukul 08.00 sampai 16.45 dengan penanggung jawab piket : Karina"
    );
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari Libur");
    break;
  default:
  console.log("Nama hari Tidak diketahui\nNama hari harus diawali dengan huruf kapital");
}

// NOMOR 4
console.log(' ================\nlevel 1 nomor 4');
for (let x = 0; x < 20; x++) {
  if (x % 2 == 0) {
    console.log("Angka Genap");
  } else {
    console.log("Angka Ganjil");
  }
}

//Latihan javascript 18/11/2023
// Membuat objek dengan properti nama, nis, rombel, dan rayon
//level 2 nomor 1
console.log(' ================\nlevel 2 nomor 1');
function tugas1() {
  let siswa = {
    nama: prompt("Masukkan Nama"),
    nis: parseInt(prompt("Masukkan NIS")),
    rombel: prompt("Masukkan Rombel"),
    rayon: prompt("Masukkan Rayon"),
  };
  return siswa;
}
console.log(tugas1());

//level 2 nomor 2
console.log(' ================\nlevel 2 nomor 2');
const angka = [3, 9, 10, 12, 14, 15, 20, 22, 23, 25, 28, 30];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 5 === 0) {
    console.log(angka[i]);
  }
}

//level 3 nomor 1
console.log(' ================\nlevel 3 nomor 1');
function sisaBagi(a, b) {
  return a % b;
}
console.log(sisaBagi(10, 3));

//lever 3 nomor 2
console.log(' ================\nlevel 3 nomor 2');
let perkondisian = (arg1, arg2) => {
  if (arg1 == arg2) {
    console.log(`angka ${arg1} sama dengan ${arg2}`);
  } else if (arg1 > arg2) {
    console.log(`angka ${arg1} lebih besar dari ${arg2}`);
  } else if (arg1 < arg2) {
    console.log(`angka ${arg1} lebih kecil dari ${arg2}`);
  }
};

  perkondisian(
    parseInt(prompt("Masukkan angka ke-1")),
    parseInt(prompt("Masukkan angka ke-2"))
  );

//level 3 nomor 3
console.log(' ================\nlevel 3 nomor 3');
document.getElementById("beliTiket").addEventListener("click", () => {
  const confirm = window.confirm(
    "Apakah Anda yakin untuk meneruskan proses pembelian tiket?"
  );
  if (confirm == true) {
    const jumlahTiket = prompt(
      "Masukkan jumlah tiket yang akan dipesan:"
    );
    if (jumlahTiket !== "") {
      const harga = jumlahTiket * 35000;
      console.log("Total harga yang harus dibayar: Rp" + harga);
    } else {
      console.log("Proses pembelian tiket tidak dapat dilanjutkan");
    }
  } else {
    console.log("Batal memesan tiket");
  }
});

//level 3 nomor 4
console.log(' ===============\nlevel 3 nomor 4');
const a = 100;
const b = 80;
const c = 30;
if (a > b && a > c) {
  console.log("Nilai terbesar adalah " + a);
} else if (b > a && b > c) {
  console.log("Nilai terbesar adalah " + b);
} else {
  console.log("Nilai terbesar adalah " + c);
}