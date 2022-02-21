console.log('Week 2-Day 1');

// buatlah suatu function, dimana function nya menerima 1 parameter, lalu function tersebut mampu unuk menentukan nilai ganjil/genap

// const oddsEven = (angka) => {
//     if (angka % 2 === 0) {
//         return 'Genap'
//     } else {
//         return 'Ganjil'
//     }
// }

// console.log(oddsEven(2))

// Arrow Function
const callMyName = (params1, params2, params3) => {
  // tidak mengenal konsep this
  return params1 + params2 + params3;
};

// jika parameter hanya dan cuma satu, kurung pada paramsnya boleh dihapus
// const genapGanjil = angka => {
//   if (angka % 2 === 0) {
//     return 'Genap';
//   } else {
//     return 'Ganjil';
//   }
// };

// jika arrow function hanya me-return sesuatu, maka tidak perlu scope {} dan kata-kata return
// const genapGanjil = angka => angka % 2 === 0 ? 'Genap' : 'Ganjil'

// Function dengan 2 parameter, parameter pertama digunakna untuk menentukan kelipatan berapa, dan parameter kedua untuk menentukan batas akhir
// function (2, 11) should return array (2,4,6,8,10)

const multiple = (angka1, stop) => {
  let result = [];
  for (let i = angka1; i <= stop; i = i + angka1) {
    result.push(i);
  }
  return result;
};

console.log(multiple(2, 103));
