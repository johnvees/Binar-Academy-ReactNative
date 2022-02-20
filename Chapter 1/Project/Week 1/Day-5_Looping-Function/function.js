// Function
// harus dipanggil oleh suatu event
// bisa menerima beberapa params / parameter
// parameter adalah suatu variable yang digunakan untuk menangkap value yang dikirim ketika memanggil function
// parameter sangat terikat oleh urutan

function halloWorld() {
  console.log('Hallo');
}

halloWorld();

// function <nama_function> () {}

const hariIni = "Jum'at";

function sayHello(myName, myAge, isMarried) {
  const tomorrowDay = 'sabtu';
  console.log(hariIni, tomorrowDay);
  console.log(
    'hallo ' + myName + ' umur saya ' + myAge + ' dan saya sudah ' + isMarried
  );
  return 'ini adalah return dari function sayHello';
}

sayHello('Velly', 20, 'Married');
sayHello('Velly', 20, 'Belom');

function penjumlahan(x, y, z) {
  hasil = x + y + z;
  console.log(hasil);
}
penjumlahan(1, 2, 3);

const hasilFunctionSayHello = sayHello('Velly', 20, 'Married');
const hasilFunctionPenjumlahan = penjumlahan(1, 2, 3);

console.log(hasilFunctionSayHello);
console.log(hasilFunctionPenjumlahan);

// const <nama_function> = function () {}

// const <nama_function> = () => {}

// Event
