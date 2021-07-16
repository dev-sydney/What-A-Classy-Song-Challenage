'use strict';

console.log('Hello world');

//Inheritance between "Classes": constructor Functions

const Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function (name) {
  return `Hello ${name}, my name is ${this.name}`;
};

/* ES6 CLASSES */
/* class PersonCl {
  constructor(fullname, birthYear) {
    this.fullName = fullname;
    this.birthYear = birthYear;
  }

  //Instance Methods for the class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }
  //static method for this class
  static hey() {
    console.log('Hey There!');
  }
}
PersonCl.hey();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    /* Always needs to happen first:
    cos the call to the super function below is responsible
    for creating the 'this' keyword in this sub-class ie StudentCl*/
/* super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this._fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha) */
/* const account = {
  owner: 'john',
  movements: [200, 699, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
console.log(account);
 */
//OBJECT.CREATE

/* 

const Syd = Object.create(personProto);
Syd.init('Sydney', 2000);
console.log(personProto); */

/* CODING CHALLENAGE #2 */

/* class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} Km/h`);
  };

  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} Km/h`);
  };
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed + 1.6;
  }
}

const ford = new carCl('Ford', 120);
console.log(ford);
console.log(ford.speedUS);
 */
/* const Person = function (name, birthyear) {
  this.name = name;
  this.birthyear = birthyear;
};

const Student = function (course, name, birthyear) {
  Person.call(this, name, birthyear);
  this.course = course;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthyear);
};

Student.prototype = Object.create(Person.prototype);

const Dropout = function (job, course, name, birthyear) {
  Student.call(this, course, name, birthyear);
  this.job = job;
};
Dropout.prototype = Object.create(Student.prototype);
console.log(Dropout);
const firstDropOut = new Dropout('carpenter', 'science', 'Nathan', 2000);
firstDropOut.calcAge();
 */

/* CODING CHALLENGE #3 */

/* const CarCl = function (make, curSpeed) {
  this.make = make;
  this.curSpeed = curSpeed;

};
CarCl.prototype.accelerate = function () {
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} Km/h`);
  };
};

CarCl.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} Km/h`);
};

const EV = function (make, curSpeed, charge) {
  CarCl.call(this, make, curSpeed);
  this.charge = charge;
};
EV.prototype = Object.create(CarCl.prototype);
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.curSpeed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.curSpeed} Km/h, with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate();

tesla.chargeBattery(90);
console.log(tesla);
console.dir(CarCl.prototype);
 */

/* class CarCl {
  constructor(make, curSpeed) {
    this.make = make;
    this.curSpeed = curSpeed;
  }

  accelerate() {
    this.curSpeed += 10;
    console.log(`${this.make} is going at ${this.curSpeed}`);
  }

  brake() {
    this.curSpeed -= 5;
    console.log(`${this.make} is going at ${this.curSpeed}`);
  }
}

class EV extends CarCl {
  constructor(make, curSpeed, charge) {
    super(make, curSpeed);
    this.charge = charge;
  }
  chargeBattery(chargeTo) {
    chargeTo = this.charge;
  }

  accelerate() {
    this.curSpeed += 20;
    this.charge--;

    console.log(
      `${this.make} is going at ${this.curSpeed} Km/h, with a charge of ${this.charge}%`
    );
  }
}

const tesla = new EV('Tesla', 140, 50);

tesla.accelerate();
 */
/* INHERITANCE BETWEEN 'CLASSES': Object.CREATE */

/* const personProto = {
  calculateAge: function () {
    console.log(2021 - this.yearOfBirth);
  },

  init: function (firstname, yearOfBirth) {
    this.firstname = firstname;
    this.yearOfBirth = yearOfBirth;
  },
};

const steven = Object.create(personProto);

const StudentProto = Object.create(personProto);

StudentProto.init = function (firstname, yearOfBirth, course) {
  personProto.init.call(this, firstname, yearOfBirth);
  this.course = course;
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
 */

class Account {
  //public Fields
  locale = navigator.language;

  //Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    /* this._movements = []; */
    //this.locale = navigator.language;
  }

  //Public Methods
  depsosit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawl(val) {
    this.#movements.push(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      console.log(`Loan apporved`);
      return this;
    }
  }
  getMovements() {
    return this.#movements;
  }
  //Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.depsosit(250);
acc1.withdrawl(140);
console.log(acc1);

//CHAINING METHODS
acc1.depsosit(300).depsosit(500).withdrawl(35).requestLoan(2500);
console.log(acc1.getMovements());

class CarCl {
  constructor(make, curSpeed) {
    this.make = make;
    this.curSpeed = curSpeed;
  }
  accelerate() {
    this.curSpeed += 10;
    console.log(`${this.make} is going at ${this.curSpeed}`);
    return this;
  }
  brake() {
    this.curSpeed -= 5;
    console.log(`${this.make} is going at ${this.curSpeed}`);
    return this;
  }
}
class EV extends CarCl {
  #charge;
  constructor(make, curSpeed, charge) {
    super(make, curSpeed);
    this.#charge = charge;
  }
  static chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  accelerate() {
    this.curSpeed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} is going at ${this.curSpeed} Km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate();

let users = ['John', 'cArl', 'AmaNda', 'AmaNda'];
let names = ['John', 'sydney', 'otuko', 'ama', 'Agbenu'];

/* class Song {
  songUsers = [];
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
  uniqueArrLength(arr) {
    return [...new Set(arr)].length;
  }
  uniqueArr(arr) {
    return [...new Set(arr)];
  }
  howMany(arrUsers) {
    const initLength = this.songUsers.length;

    for (const el of arrUsers) {
      this.songUsers.push(el.toLowerCase());
    }
    const newLength = this.uniqueArrLength(this.songUsers);

    return newLength - initLength;
  }
}

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.howMany('John', 'Fred', 'Bob', 'Carl', 'RyAn'));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));
console.log(mountMoose.howMany(['Jack', 'jacK']));
console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']));
console.log(
  mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'])
);

console.log(mountMoose.songUsers);
 */
/* const uniqueArr = function (arr) {
  return [...new Set(arr)].length;
};
console.log(uniqueArr(users)); */

const uniqueArrFn = function (arr) {
  return [...new Set(arr)];
};

class Song {
  listeners = [];

  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  howMany(arr) {
    const initLength = this.listeners.length;

    for (const el of arr) {
      this.listeners.push(el.toLowerCase());
    }
    const uniqueArrFn = function (arr) {
      return [...new Set(arr)];
    };
    const uniArr = uniqueArrFn(this.listeners);
    this.listeners = [];
    for (const el of uniArr) {
      this.listeners.push(el);
    }
    const newLength = this.listeners.length;
    return newLength - initLength;
  }
}
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

console.log(mountMoose.howMany(['John', 'Fred', 'Bob', 'Carl', 'RyAn']));
console.log(mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']));
console.log(mountMoose.howMany(['Jack', 'jacK']));
console.log(mountMoose.howMany(['Amanda', 'CalEb', 'CarL', 'Furgus']));
console.log(
  mountMoose.howMany(['JOHN', 'FRED', 'BOB', 'CARL', 'RYAN', 'KATE'])
);
console.log(mountMoose);

console.log(Array.prototype);
