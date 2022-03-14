console.log('OOP');
// OOP
// menyelesaikan suatu masalah / algoritma menggunakan metode object

// Paradigma pemrograman
// cara kita menyelesaikan suatu masalah / algoritma menggunakan sudut pandang pemrograman

// Kenapa kita menggunakan OOP
// adanya sistem inheritance, encapsulation, polymorphism, abstraction

// OOP
//

const buah = {
  nama: 'apel',
  warna: 'merah',
  rasa: 'manis',
  bentuk: 'bulat',
};

// const Buah = (nama, warna, rasa, bentuk) => {
//   return {
//     nama: nama,
//     warna: warna,
//     rasa: rasa,
//     bentuk: bentuk,
//   };
// };

// const Buah = function (nama, warna, rasa, bentuk) {
//     this.nama = nama;
//     this.warna = warna;
//     this.rasa = rasa;
//     this.bentuk = bentuk;
// };

// class Buah {
//   constructor(nama, warna, bentuk) {
//     this.nama = nama;
//     this.warna = warna;
//     this.bentuk = bentuk;
//   }

//   caraMakannya() {
//     return `${this.nama} harus dikuspas terlebih dahulu`;
//   }
// }

// const Pisang = new Buah('pisang', 'kuning', 'lonjong');
// const Apel = new Buah('apel', 'merah', 'bulat');
// console.log(Pisang.caraMakannya());
// console.log(Apel);

class Hero {
  constructor(heroName = 'HeroName', stamina, type, attack) {
    this.heroName = heroName;
    this.stamina = stamina;
    this.type = type;
    this.attack = attack;
  }

  #health = 100;
  level = 20;

  menyerang() {
    this.stamina -= 10;

    return this.stamina;
  }

  istirahat() {
    this.stamina += 10;

    return this.stamina;
  }
}

// Inheritance
class Attribute extends Hero {
  constructor(heroName, stamina, type, attack) {
    super(heroName, stamina, type, attack);
  }

  showMyHealth() {
    return this.istirahat();
  }

  istirahat() {
    if (this.type === 'attacker') {
      return (this.stamina += 5);
    } else {
      return (this.stamina += 2);
    }
  }
}

const Yohanes = new Attribute('Yohanes', 100, 'attacker', 30);
console.log(Yohanes.showMyHealth());

// Encapsulation
// untuk menentukan suatu property atau method itu memiliki sifat private(#) atau public

// Polymorphism
// adalah membuat satu method dengan nama yang sama tanpa merubah method parent secara langsung

// Abstraction
class Student {
  constructor(props) {
    this.state = { ...props };
    this.nilai = [70, 50, 40];
  }
}

const yohanesAbs = new Student(new Hero());

const vellyAbs = new Student({
  kesukaan: ['tidur', 'bernafas'],
  address: 'jalan jalan',
});

console.log(yohanesAbs);
console.log(vellyAbs);
