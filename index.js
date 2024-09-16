const menu = [
  { name: "Pineapple pizza", price: 30 },
  { name: "Cheese pizza", price: 30 },
  { name: "Veggie pizza", price: 30 },
  { name: "Garlic pizza", price: 30 },
];

const cashInRegister = 100;
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
  const newOrder = { pizza: selectedPizza, status: "ordered" };
  orderQue.push(newOrder);
  return newOrder;
}

