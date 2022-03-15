console.log('Promise');

// Promise

let sudahDatang;
let kondisi = '!avail';

const doATask = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (kondisi === 'avail') {
      resolve('janji terpenuhi');
    } else {
      reject('ada kendala mon maap');
    }
  }, 5000);
});

const doATask1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ini bawah');
  }, 2000);
});

// callback statement

// doATask
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// doATask1.then((result) => {
//   console.log(result);
// });

// asynchronous process

const doAPromise = async () => {
  try {
    const result = await doATask;
    const result1 = await doATask1;
    console.log(result);
    console.log(result1);
  } catch (error) {
    console.log(error);
  }
};

doAPromise();

// Pending

// Fulfilled / resolve

// Rejected

// untuk menghandle pending pada suatu promise
