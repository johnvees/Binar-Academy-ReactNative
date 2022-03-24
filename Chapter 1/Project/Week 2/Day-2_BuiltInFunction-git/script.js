// Built-in Function atau method bawaan javascript

const firstName = 'Yohanes';
const lastName = 'Sabattino';
const age = 21;

// String
const myName = 'Yohanes Velly Sabattino';
const myFullName = 'Yohane, Velly, Sabattino';

// slice
const hasilSlice = myName.slice(3.1);
console.log(hasilSlice);

// concat
// menggabungkan 2 atau lebih
const hasilConcat = myName.concat(' adalah', ' seorang', ' kapiten');
console.log(hasilConcat);

// string literal
// const fullName = firstName + "..." + lastName
const fullName = `hallo nama saya ${firstName} ${lastName}, dan umur saya adalah ${age} `;
console.log(fullName);

// split
const hasilSplit = myFullName.split('?');
const hasilSplit1 = myName.split('');
console.log(hasilSplit);
console.log(hasilSplit1);

// toUpperCase
const hasilUpperCase = myName.toUpperCase();
console.log(hasilUpperCase);

// toLowerCase
const hasilLowerCase = myName.toLowerCase();
console.log(hasilLowerCase);

// includes
const isExist = myName.includes('Yoh');
console.log(isExist);

// Array
const students = ['Yohanes', 'Velly', 'Sabattino'];

// splice
// const hasilSpliceArrray = students.splice(0, 2);
// console.log(hasilSpliceArrray);

// slice
const hasilSliceArrray = students.slice(1, 2);
console.log(hasilSliceArrray);

// concat
const hasilConcatArray = students.concat('Tsani');
console.log(hasilConcatArray);

// reverse
const hasilReverse = students.reverse();
console.log(hasilReverse);

// join
const hasilJoin = students.join(' ');
console.log(hasilJoin);

const reverseName = myName.split(' ').reverse().join(' ');
console.log(reverseName);

// includes
const isExistArray = students.includes('Yoh');
console.log(isExistArray);

// foreach
let numbers = [5, 8, 6, 9, 3, 2, 7];
const numbersMulitpleBy3 = [];
console.log(numbers);

// const hasilForEach = numbers.forEach((isiArray, index) => {
//   numbers[index] = isiArray * 3;
// });
// console.log(numbers);

// map
const hasilForEach = numbers.map((isiArray, index) => {
  return isiArray + 2;
});
console.log(hasilForEach);

// index of
const indexKe = numbers.indexOf(3);
console.log(indexKe, ' Index Ke');

// sort
const hasilSorting = numbers
  .sort((a, b) => {
    return a - b;
  })
  .reverse();
console.log(hasilSorting, 'Hasil Sorting');

// find
const hasilFind = numbers.find((value, index) => {
  return value < 5;
});
console.log(hasilFind, 'hasil find');

// filter
const hasilFilter = numbers.filter((value, index) => {
  return value % 2 === 0;
});
console.log(hasilFilter, 'hasil filter');

// Number
// parseInt
const myAge = '20';
const hasilParseInt = parseInt(myAge);
console.log(hasilParseInt);

// parseFloat
const resultTest = '20.5';
const hasilParseFloat = parseFloat(resultTest);
console.log(hasilParseFloat);

// math round
const hasilMathRound = Math.round(2.6);
console.log(hasilMathRound);

// math ceil
const hasilMathCeil = Math.ceil(4.2);
console.log(hasilMathCeil);

// math floor
const hasilMathFloor = Math.floor(4.9);
console.log(hasilMathFloor);

// math random
const hasilRandom = parseInt(Math.random() * 100);
console.log(hasilRandom);

// Boolean
console.log(!false);

// membuat suatu function yang menerima 1 parameter untuk merubah huruf awal dari parameter menjadi kapital
// rules :
// 1. tipe data dari parameter harus string selain itu alert
// 2. setiap kata harus berawalan kapital, hari ini hari selasa = Hari Ini Hari Selasa

const changeCapital = (kalimat) => {
  if (typeof kalimat === 'string') {
    const array = kalimat.split(' ');
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
      console.log(array);
    }
    const array2 = array.join(' ');
    return array2;
  } else {
    alert(typeof kalimat);
  }
};

console.log(changeCapital('hari ini hari selasa'));
console.log(changeCapital('tes tes'));

const data = {
  status: 'Released',
  tagline: 'Growing up is a beast.',
  title: 'Turning Red',
  video: false,
  vote_average: 7.4,
  vote_count: 871,
  credits: {
    cast: [
      {
        adult: false,
        gender: 1,
        id: 3156344,
        known_for_department: 'Acting',
        name: 'Rosalie Chiang',
      },
      {
        adult: false,
        gender: 1,
        id: 3156344,
        known_for_department: 'Acting',
        name: 'Rosalie Chiang',
      },
      {
        adult: false,
        gender: 1,
        id: 3156344,
        known_for_department: 'Acting',
        name: 'Rosalie Chiang',
      },
      {
        adult: false,
        gender: 1,
        id: 3156344,
        known_for_department: 'Acting',
        name: 'Rosalie asdasd',
      },
    ],
  },
};

const abcd = data.credits.cast;

const cobaMap = abcd.map((isiArray, index) => {
  return isiArray.name;
});

console.log(cobaMap);
console.log(abcd);

console.log(abcd[1].name);
