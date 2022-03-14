console.log('latihan');

class Kendaraan {
  constructor(jenis, namaBrand, kecepatan, jarak, waktu, bensin) {
    this.jenis = jenis;
    this.namaBrand = namaBrand;
    this.kecepatan = kecepatan;
    this.jarak = jarak;
    this.waktu = waktu;
    this.bensin = bensin;
  }

  tesKecepatan() {
    this.kecepatan = this.jarak / this.waktu;

    return this.kecepatan;
  }
}

class butuhBensin extends Kendaraan {
  constructor(jenis, namaBrand, kecepatan, jarak, waktu, bensin) {
    super(jenis, namaBrand, kecepatan, jarak, waktu, bensin);
  }

  isIrit() {
    if (this.kecepatan >= 25) {
      return (this.bensin += 5);
    } else {
      return (this.bensin += 2);
    }
  }
}

const tesMobil = new butuhBensin('mobil', 'avanza', undefined, 70, 2, 0);

console.log(tesMobil);
console.log(
  `Kendaraan ini menempuh jarak sejauh ${tesMobil.jarak} km selama ${
    tesMobil.waktu
  } jam ditempuh dengan kecepatan rata-rata ${tesMobil.tesKecepatan()} km/jam`
);
console.log(`Kendaraan ini butuh bensin sebanyak ${tesMobil.isIrit()} liter`);
console.log(`Kendaraan ini butuh bensin sebanyak ${tesMobil.isIrit()} liter`);
