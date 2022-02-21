const students = [
  'Yohanes',
  'Velly',
  'Sabattino',
  ['Joko', 'Widodo'],
  ['Mega', 'Wati', ['saya', ['lo']]],
];

const guys = ['Yohanes', 'Velly', 'Sabattino'];

// Array

// Create
// push
// meletakkan value di akhir array
guys.push('Chico');
console.log(guys);

// unshift
// meletakkan value pada awal array
guys.unshift('Tsani');
console.log(guys);

guys[4] = 'Bragi';
console.log(guys);

// Read
console.log(students[4][2][1][0]);

// Update
guys[0] = 'Tsani Chico Bragi';
console.log(guys);

students[4][2][1][0] = 'gue';
console.log(students[4][2][1][0]);

// Delete
// shift
// delete data paling awal
guys.shift();
console.log(guys);

// pop
// delete data paling akhir
guys.pop();
console.log(guys);

guys.length = 1;
console.log(guys);
