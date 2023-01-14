class Phone {
  constructor(name) {
    this.name = name;
  }
};
class Sum2 {
 static func = (...numbers) => numbers.reduce((total, number) => total * number);
};

const data = (12345);
exports.data = data;
exports.Sum2 = Sum2;