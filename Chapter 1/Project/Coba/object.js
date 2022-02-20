const Person = {
  firstName: 'Yohanes',
  lastName: 'Sabattino',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(Person.fullName());
