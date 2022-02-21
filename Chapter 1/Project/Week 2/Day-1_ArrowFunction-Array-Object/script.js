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

// jika parameter hanya satu, kurung pada paramsnya boleh dihapus
const genapGanjil = angka => {
  if (angka % 2 === 0) {
    return 'Genap';
  } else {
    return 'Ganjil';
  }
};

// jika arrow function hanya me-return sesuatu, maka tidak perlu scope {} dan kata-kata return

const genapGanjil = angka => angka % 2 === 0 ? 'Genap' : 'Ganjil'
