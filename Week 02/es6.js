// Destructuring

// 3.1
function getAverage() {
  const obj = {
    x: 3.6,
    y: 7.8,
    z: 4.3
  };
  const {
    x,
    y,
    z
  } = obj;
  console.log(Math.floor((x + y + z) / 3.0));
}

// 3.2
function getAddress() {
  let coderschool = {
    city: "HCMC",
    country: "Vietnam",
    address: {
      number: 12,
      street: "Ton Dan",
      district: "4",
    },
  };
  let {
    city,
    country,
    address
  } = coderschool;
  let {
    number,
    street,
    district
  } = address;
  console.log(city === "HCMC" && country === "Vietnam" && street === "Ton Dan")
}

// 3.3
function getElements() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const {
    first = arr[0], third = arr[2], fourth = arr[4]
  } = arr;
  console.log({
    first,
    third,
    fourth
  });
}

// 3.4
function getNestedElements() {
  const food = [
    ["carrots", "beans", "peas", "lettuce"],
    ["apples", "mangos", "oranges"],
    ["cookies", "cake", "pizza", "chocolate"],
  ];
  const {
    carrots = food[0][0], cookies = food[2][0], mangos = food[1][1]
  } = food;
  console.log({
    carrots,
    cookies,
    mangos
  });
}

// Rest and Spread

// 4.1
function restParameters(first, ...rest) {
  console.log(rest[0] === 1 && rest[1] === 2)
}

// 4.2
function ontoAnObject() {
  const array = [1, 2, 3, 4, 5, 6];
  const object = {};
  [object.one, object.two, object.three, ...object.rest] = array;
  console.log(object);
}

//4.3
function findTheMax() {
  const arr1 = [1, 7, 2, 4];
  const arr2 = [1, 9, 5, 8];
  console.log(Math.max(...arr1, ...arr2));
}

// 4.4
function concatenateArrays() {
  const arr1 = [0, 1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9];
  const result = [...arr1, ...arr2, ...arr3];
  console.log(result);
}

// 4.5
function mergeObjects() {
  // what does this return?
  const obj1 = {
    a: "a from obj1",
    b: "b from obj1",
    c: "c from obj1",
    d: {
      e: "e from obj1",
      f: "f from obj1",
    },
  };
  const obj2 = {
    b: "b from obj2",
    c: "c from obj2",
    d: {
      g: "g from obj2",
      h: "h from obj2",
    },
  };
  const result = {
    ...obj1,
    ...obj2
  };
  console.log(result);
  console.log(result.a === "a from obj1" &&
    result.b === "b from obj2" &&
    result.c === "c from obj2" &&
    result.d.e === undefined &&
    result.d.f === undefined &&
    result.d.g === "g from obj2" &&
    result.d.h === "h from obj2")
}

// Arrow functions

// 5.1
function multiArgument() {
  const divide = (a, b) => a / b;
  console.log(divide(40, 10));
}

// 5.2
function spreadWithArrow() {
  const asArray = (...args) => args;
  console.log(asArray(1, 2, 3, 4))
}

// 5.3
function withObject() {
  const getObject = (favoriteCandy) => favoriteCandy;
  console.log(getObject("twix"));
}

// 5.4
function withMultiLineExpression() {
  const getString = (name) => `Hello there ${name}\nHow are you doing today?`;
  console.log(getString("Ryan"));
}

// 5.5
function curryAdd() {
  let curryAddition = (a) => (b) => (c) => a + b + c;
  console.log(curryAddition(9)(3)(5));
}

(function () {
  // Destructuring
  // getAverage(); // 3.1
  // getAddress(); // 3.2
  // getElements() // 3.3
  // getNestedElements() // 3.4

  // Rest and Spread
  // restParameters(); // 4.1
  // ontoAnObject(); // 4.2
  // findTheMax();
  // concatenateArrays();
  // mergeObjects();

  // Arrow functions
  // multiArgument(); // 5.1
  // spreadWithArrow(); // 5.2
  // withObject(); // 5.3
  // withMultiLineExpression(); // 5.4
  // curryAdd(); // 5.5
})();