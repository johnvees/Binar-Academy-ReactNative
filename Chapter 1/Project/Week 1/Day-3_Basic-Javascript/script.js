console.log('Day 3');

// Variables

// var
// ini sudah tidak dipakai, karena datanya bisa diubah
// bisa dideklarasikan lagi dengan value yang berbeda
// tidak ada validasi error

// let
// lebih disarankan daripada var, karna nanti terdapat undefined
// rekomendasi orang

// const
// variable yang nilainya nggak bisa dirubah atau pasti
// immutable

// Tipe Data
// number
// - float
const rataRataPendudukIndonesia = 2.85;
console.log(typeof rataRataPendudukIndonesia);
// - integer
const age = 18;

// string
const name = "Yohanes 'Velly Sabattino";
const myNickname = 'Yohanes';
console.log(name);

// boolean
const isMarried = false;
const isStudent = true;
console.log(isMarried);

// object
// selalu pasangan key dan value
// key adalah seperti variable, tapi miliknya object, jadi tidak perlu keyword var, let, atau const
const criteria = {
  height: '173 cm',
  weight: '65 kg',
  hairColor: 'black',
  age: 21,
  isUsingGlasses: false,
};
console.log(criteria);

// array
// bisa ada object dalam array
const myHobbies = ['walking', 'sleeping'];
console.log(myHobbies);

// function
// suatu tipe data yang dapat melakukan processnya sendiri, berbeda dengan runtime js

// Nan
// tipe data diluar number
const hasil = 'a' + 20;

// null
// kosong

// undefined
// tidak didefinisikan

// Operator
// number (+, -, *, /, **(pangkat), %(modulus))
const lakiLaki = 15;
const wanita = 10;
const jumlahStudent = lakiLaki + wanita;

// string
const firstName = 'Yohanes';
const secondName = 'Velly';
const lastName = 'Sabattino';
const fullName = firstName + ' ' + secondName + ' ' + lastName;
console.log(fullName);

// Comparison (>, >=, <, <=)

// > lebih dari
const isGreaterThan = 5 > 6;

// < kurang dari
const isLessThan = 9 < 20;

// == equal to dengan tidak melihat tipe datanya
const isEqualTo = '15' == 15; // true

// === equal to dengan tipe data yang sama
const isEqualTo1 = '15' === 15; // false
const isEqualTo2 = 15 === 15; // true

// != is not equal
const isNotEqual = '15' != 15; //false

// !== is not equal
const isEqualTo3 = '15' !== 15; // true
const isEqualTo4 = 15 !== 15; // false

const isTrue = (20 > 80 === 60 * 2 > 96) !== false;
console.log(isTrue);
