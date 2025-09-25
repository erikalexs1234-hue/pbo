// Class Induk
class Mahasiswa {
  constructor(nama, nim, jurusan, umur, universitas) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.umur = umur;
    this.universitas = universitas;
  }

  info() {
    console.log(`${this.nama} (${this.nim}) dari jurusan ${this.jurusan}, umur ${this.umur}, universitas ${this.universitas}`);
  }

  belajar() {
    console.log(`${this.nama} sedang belajar.`);
  }

  updateJurusan(jurusanBaru) {
    this.jurusan = jurusanBaru;
    console.log(`${this.nama} pindah jurusan ke ${this.jurusan}`);
  }
}

// Class Anak 1
class MahasiswaAktif extends Mahasiswa {
  constructor(nama, nim, jurusan, umur, universitas, semester) {
    super(nama, nim, jurusan, umur, universitas);
    this.semester = semester;
  }

  status() {
    console.log(`${this.nama} adalah mahasiswa aktif semester ${this.semester}.`);
  }
}

// Class Anak 2
class MahasiswaAlumni extends Mahasiswa {
  constructor(nama, nim, jurusan, umur, universitas, tahunLulus) {
    super(nama, nim, jurusan, umur, universitas);
    this.tahunLulus = tahunLulus;
  }

  status() {
    console.log(`${this.nama} adalah alumni yang lulus tahun ${this.tahunLulus}.`);
  }
}

// Object 3
const mhs1 = new MahasiswaAktif("Budi", "12345", "Informatika", 20, "Universitas A", 5);
const mhs2 = new MahasiswaAktif("Siti", "67890", "Sistem Informasi", 21, "Universitas B", 3);
const mhs3 = new MahasiswaAlumni("Andi", "11223", "Teknik Elektro", 25, "Universitas C", 2022);

// Jalankan method
mhs1.info();
mhs1.belajar();
mhs1.status();

mhs2.info();
mhs2.updateJurusan("Teknik Komputer");
mhs2.status();

mhs3.info();
mhs3.status();
