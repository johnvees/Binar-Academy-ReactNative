// Object

let biodata = {
  firstName: 'Yohanes',
  secondName: null,
  lastName: 'Sabattino',
  age: 20,
  isMarried: false,
  hobbies: ['makan', 'ngoding', 'surfing ig'],
  myFullname: function () {
    return this.firstName + this.lastName;
  },
};

// Create
console.log(biodata, 'ini sebelum create');
biodata.address = 'jalan ramai sekali';
biodata.nilai = [9, 8, 6, 5, 2];
biodata.kriteria = { height: 172, weight: 65 };
biodata.kriteria.bloodType = 'B+';
console.log(biodata, 'ini setelah create');

console.log(biodata.kriteria.bloodType);
console.log(biodata['kriteria']['bloodType']);

// Read
// dot notation
console.log(
  biodata.firstName + biodata.lastName + 'Hobbyku' + biodata.hobbies[1]
);
// square notation
console.log(
  biodata['firstName'] + biodata['lastName'] + 'Hobbyku' + biodata['hobbies'][1]
);

// Update
biodata.address = 'jalan baru';
console.log(biodata);

// Delete
delete biodata.nilai;
console.log(biodata);

// Destruction pada Array dan Object
// Array
let students = ['Yohanes', 'Velly', 'Sabattino'];
let [name1, name2] = students;
name2 = 'Chico';
console.log(name1, name2);

// Object
let { firstName, secondName, hobbies } = biodata;
console.log(secondName, hobbies[1], 'object');

// Spread Operator
// Array
students = ['Tsani', ...students, 'Bragi'];
console.log(students);

// Object
const myData = { ...biodata, kelas: 'RN 1', firstName: 'Yohanes Velly' };
console.log(myData);
