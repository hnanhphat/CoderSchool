// Assignment 1
const inventors = [
  "Albert Einstein",
  "Issac Newton",
  "Galileo Galilei",
  "Marie Curie",
  "Johannes Kepler",
  "Nicolaus Copernicus",
  "Max Planck",
  "Katherine Blodgett",
  "Ada Lovelace",
  "Sarah E. Goode",
  "Lise Meitner",
  "Hanna Hammarstrom",
];

// filter()
function filter01() {
  console.log(inventors.filter((item) => item.charAt(0) == 'A'));
}

function filter02() {
  console.log(inventors.filter((item) => item.charAt(0) == item.charAt(item.indexOf(' ') + 1)));
}

// sort()
function sort01() {
  let result = inventors.sort((a, b) => {
    if (a.charAt(0) < b.charAt(0)) return -1;
    if (a.charAt(0) > b.charAt(0)) return 1;
    return 0;
  });
  console.log(result);
}

function sort02() {
  let result = inventors.sort((a, b) => {
    if (a.length < b.length) return -1;
    if (a.length > b.length) return 1;
    return 0;
  });
  console.log(result);
}

// map()
function map01() {
  console.log(inventors.map((item) => item.length));
}

function map02() {
  console.log(inventors.map((item) => item.toUpperCase()));
}

// reduce()
function reduce01() {
  let result = inventors.reduce((sum, current) => sum += current.substring(0, current.indexOf(' ')) + ' ', '');
  console.log(result)
}

function reduce02() {
  let result = inventors.reduce((sum, current) => sum += current, '');
  console.log(result);
}

// Assignment 2
let startAmount = 1000;
let transactions = [{
    currency: "USD",
    amount: 12,
    type: "withdrawal"
  },
  {
    currency: "USD",
    amount: 104,
    type: "withdrawal"
  },
  {
    currency: "USD",
    amount: 150,
    type: "deposit"
  },
  {
    currency: "USD",
    amount: 150,
    type: "deposit"
  },
  {
    currency: "USD",
    amount: 250,
    type: "withdrawal"
  },
  {
    currency: "USD",
    amount: 500,
    type: "deposit"
  },
  {
    currency: "USD",
    amount: 447,
    type: "withdrawal"
  },
  {
    currency: "USD",
    amount: 120,
    type: "deposit"
  },
  {
    currency: "USD",
    amount: 58,
    type: "withdrawal"
  },
  {
    currency: "USD",
    amount: 90,
    type: "withdrawal"
  },
];
const usdToVND = 23000;

function forEachAss02() {
  let result = `Balance ${startAmount}\nTransaction History:\n`;
  transactions.forEach(item => {
    if (item.type == 'withdrawal') {
      result += `- You ${item.type} ${item.amount}. The new balance is ${startAmount -= item.amount}\n`;
    } else {
      result += `- You ${item.type} ${item.amount}. The new balance is ${startAmount += item.amount}\n`;
    }
  });
  console.log(result);
}

function reduceAss02() {
  let result = transactions.reduce((sum, current) => (current.type == 'withdrawal') ? sum -= current.amount : sum += current.amount, 1000);
  console.log(result);
}

function filterAndReduceAss02() {
  // let expense = 0, income = 0;
  let expenseArr = transactions.filter((item) => item.type == 'withdrawal');
  let expense = expenseArr.reduce((sum, current) => sum += current.amount, 0);
  let incomeArr = transactions.filter((item) => item.type == 'deposit');
  let income = incomeArr.reduce((sum, current) => sum += current.amount, 0);
  console.log(`Expense: ${expense}\nIncome: ${income}`);
}

function mapAss02() {
  let result = transactions.map((item) => item.amount *= usdToVND);
  console.log(result);
}

function typeSortAss02() {
  let result = transactions.sort((a, b) => {
    if (a.type < b.type) return -1;
    if (a.type > b.type) return 1;
    return 0;
  });
  console.log(result);
}

function typeSortAss03() {
  let expenseArr = transactions.filter((item) => item.type == 'withdrawal');
  let expense = expenseArr.sort((a, b) => {
    if (a.amount < b.amount) return -1;
    if (a.amount > b.amount) return 1;
    return 0;
  });
  console.log(expense);
}

function typeSortAss04() {
  let incomeArr = transactions.filter((item) => item.type == 'deposit');
  let income = incomeArr.sort((a, b) => {
    if (a.amount < b.amount) return -1;
    if (a.amount > b.amount) return 1;
    return 0;
  });
  console.log(income);
}

// Assignment 3
let shoppingCart = [{
    id: "A31",
    item: "T-shirt",
    price: 9.9,
    quantity: 5
  },
  {
    id: "A32",
    item: "Jacket",
    price: 99.9,
    quantity: 1
  },
  {
    id: "A33",
    item: "Skirt",
    price: 19.9,
    quantity: 2
  },
  {
    id: "A34",
    item: "Ankle Pant",
    price: 39.9,
    quantity: 3
  },
  {
    id: "A35",
    item: "Polo shirt",
    price: 14.9,
    quantity: 3
  },
  {
    id: "A36",
    item: "Chino Short",
    price: 29.9,
    quantity: 2
  },
  {
    id: "A37",
    item: "Easy Short",
    price: 19.9,
    quantity: 2
  },
];

function priceOfProduct() {
  shoppingCart.forEach((current) => current.sum = current.price * current.quantity);
  console.log(shoppingCart);
}

function totalPriceOfProduct() {
  shoppingCart.forEach((current) => current.sum = current.price * current.quantity);
  let result = shoppingCart.reduce((sum, current) => sum + current.sum, 0);
  console.log(result);
}

function removeItemsFromCart(productId, quantity) {
  let product = (quantity >= 0) ? shoppingCart.find((item) => item.id == productId) : 'Please input positive number!';
  if (product) {
    if (product.quantity - quantity == 0) {
      shoppingCart = shoppingCart.filter((item) => item != product);
    } else {
      shoppingCart.forEach((current) => {
        if (current.id == productId) current.quantity -= quantity;
      });
    }
    console.log(shoppingCart);
  } else {
    console.log('Please input correct id!')
  }
}

function addItemToCart(product, quantity) {
  let currentProduct = (quantity >= 0) ? shoppingCart.find((item) => item.id == product.id) : 'Please input positive number!';
  if (currentProduct) {
    shoppingCart.forEach((current) => {
      if (current.id == currentProduct.id) current.quantity += quantity;
    });
  } else {
    shoppingCart = [product, ...shoppingCart].sort((a, b) => (a.id < b.id) ? -1 : 1);
  }
  console.log(shoppingCart);
}

(function () {
  // filter01();
  // filter02();

  // sort01();
  // sort02();

  // map01();
  // map02();

  // reduce01();
  // reduce02();

  // forEachAss02();
  // reduceAss02();
  // filterAndReduceAss02();
  // mapAss02();
  // typeSortAss02();
  // typeSortAss03();
  // typeSortAss04();

  // priceOfProduct();
  // totalPriceOfProduct();
  // removeItemsFromCart('A32', 1);
  // addItemToCart({id: 'A40'}, 2);
})();