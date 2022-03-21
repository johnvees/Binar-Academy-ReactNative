console.log('JSON');

// JSON
// Javascript Object Notation
// const obj = {

// };

// const obj1 = () => {
//   return {

//   };
// };

// class obj2 {
//     constructor() {

//     }
// }

const obj = {
  name: 'Yohanes',
};

const stringyObj = JSON.stringify(obj);

console.log(typeof stringyObj);
console.log(stringyObj);

console.log(JSON.parse(stringyObj));

// kriteria .json
// key nya dibungkus oleh string
// tidak ada comment / tidak bisa memberikan statement komentar di dalam JSON
// example

// Authorization
// flow yang digunakan oleh user agar user dapat mengakses aplikasi secara penuh

// Authentication
// proses dimana suatu user diberikan akses

// Authenticated
// user yang sudah terautentikasi

// What is Fetch ?
// http request yang digunakan untuk menghubungkan suatu aplikasi ke API
// contoh http request :
// fetch
const getListMovie = async () => {
  const body = {
    name: 'Yohanes',
    age: 20,
  };
  const res = await fetch('https://api.themoviedb.org/3/movie/now_playing', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTUyNDNhODdlYWFkZWM3Yzc0NjA5NTFhMjEwNjA5OCIsInN1YiI6IjYyMzA5ODA5NmQxYmIyMDAxZDY3NWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfew_qfaII4a1Kk0unDKAxx8sofcaTL6euGGibnxO0w',
    },
  });

  const results = await res.json();
  console.log(results);
};

getListMovie();
// axios

// // import axios from 'axios';

// async function axios(url, body, headers) {
//   try {
//     const res = await fetch(url, {
//       method: 'GET',
//       body: JSON.stringify(body),
//       headers: {
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTUyNDNhODdlYWFkZWM3Yzc0NjA5NTFhMjEwNjA5OCIsInN1YiI6IjYyMzA5ODA5NmQxYmIyMDAxZDY3NWM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gfew_qfaII4a1Kk0unDKAxx8sofcaTL6euGGibnxO0w',
//       },
//     });
//   } catch (error) {}
// }

// axios('', { name: '', age: 20 });

// How to use Fetch?
