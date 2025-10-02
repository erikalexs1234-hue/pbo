class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;   // Atribut publik
        let _nim = nim;     // Atribut private menggunakan closure
        this.nilai = nilai; // Atribut publik

        // Getter untuk mengakses NIM
        this.getNim = function() {
            return _nim;
        };

        // Setter untuk mengubah NIM dengan validasi
        this.setNim = function(nimBaru) {
            // Validasi sederhana: panjang harus 12 dan hanya angka
            if (nimBaru.length === 12 && !isNaN(nimBaru)) {
                _nim = nimBaru;
            } else {
                console.log('NIM harus berupa angka dengan tepat 12 digit');
            }
        };
    }
}

// Membuat objek mahasiswa
let mhs1 = new Mahasiswa("Budi", "123456789012", 85);

// Akses nama & nilai (atribut publik)
console.log("Nama:", mhs1.nama);
console.log("Nilai:", mhs1.nilai);

// Akses NIM (menggunakan getter)
console.log("NIM (awal):", mhs1.getNim());

// Ubah NIM dengan setter (valid)
mhs1.setNim("987654321098");
console.log("NIM (baru):", mhs1.getNim());
