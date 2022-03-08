console.log('Day 4');

// algoritma adalah suatu instruksi yang digunakan untuk menyelesaikan suatu masalah, berdasarkan runtutan / langkah2 yang sistematis dan logis

// pseudocode
// melalui pemahaman kata berisi masalah, properti, urutan penyelesaian, dan solusi

// flowchart
// menggunakan simbol, untuk penyelesainnya
// dapat menggunakan bantuan diagrams.net

// Conditional
// untuk menentukan kondisi suatu statement

// If Statement

const angka1 = 60;
const angka2 = 80;

if (angka1 >= angka2) {
  console.log('benar');
} else if (angka1 === 20) {
  console.log('benar');
} else {
  console.log('salah');
}

const myName = 'Yohanes';
const myFriendName = 'Chico';

if (angka1 >= angka2 - 15) {
  console.log(myName);
} else if (myName === 'Yohanes Velly Sabattino') {
  console.log('hallo ' + myName);
} else if (myFriendName === 'Tito') {
  console.log('hai ' + myFriendName);
} else {
  console.log('who are you');
}

// Switch Case

const kingName = 'Tchalla';

switch (kingName) {
  case 'Yohanes':
    console.log(myName);
    break;

  case 'Tchalla':
    console.log(kingName);
    break;

  default:
    console.log('Tidak ada namanya');
    break;
}

// falsy
// false, undefined, null, NaN, 0, ""

// truthy

if ('Yohanes') {
  console.log('I am truthy');
} else if (null) {
  console.log('I am falsy');
} else {
  console.log('i am not anything');
}

// Looping
