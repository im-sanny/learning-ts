const menu = [
  { name: "Pineapple pizza", price: 30 },
  { name: "Cheese pizza", price: 30 },
  { name: "Veggie pizza", price: 30 },
  { name: "Garlic pizza", price: 30 },
];

const cashInRegister = 100;
const nextOrderId = 1;
const orderQue = [];

/**
 * Challenge: Add a utility first function "addNewPizza" that takes a pizza object and add it to the menu
 */

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

/*
*Write another utility function, placeOrder, that takes a pizza name parameter and:
1. finds that pizza object in the menu,
2. adds the income to the cashInRegister
3. pushes a new "order object" to the orderQueue
(e.g. {Pizza: selectedPizzaObjectFromStep1, status: "ordered"})
4. returns the order object (just in case we need it later)
*/

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQue.push(newOrder);
  return newOrder;
}

/* 
*Challenge: write another utility function, completeOrder, that takes an *orderId as a parameter 
*finds the correct order in the orderQueue, and marks its status as "completed", for good measure, 
*return the found order from the function.

*Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database
*/

function completeOrder(orderId) {
  const order = orderQue.find((order) => order.id === order);
  order.status = "completed";
  return order;
}

addNewPizza({ name: "Chicken leg pizza", cost: 52 });
addNewPizza({ name: "BBQ chicken leg", cost: 22 });
addNewPizza({ name: "Rice pizza", cost: 12 });

placeOrder("Chicken leg pizza");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Oder queue:", orderQue);
