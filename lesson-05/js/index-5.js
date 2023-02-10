// # Модуль 3. Заняття 1. Об'єкти

// <!-- https://github.com/luxplanjay/js-33-qna/blob/03-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D1%8B/js/vehicles.js -->

// ## Example 1 - Основи об'єктів

// Напиши скрипт, який для об'єкта `user`, послідовно:

// - додає поле `mood` зі значенням `'happy'`
// - замінює значення `hobby` на `'skydiving'`
// - замінює значення `premium` на `false`
// - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
//   `Object.keys()` та `for...of`

// ### Код

//```js

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for( const key of keys){
//     console.log(`${key}: , ${user[key]}`);
//}
// console.log(user);

// ```

// ## Example 2 - метод Object.values()

// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
// підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно
// вийти 390. Якщо об'єкт `salaries` порожній, то результат має бути 0.

// ### Код

// ```js

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const keys = Object.values(salaries);

// let sum = 0;
//  for( const value of values) {
//      sum += value;
// }

// console.log(sum);

// ```

// ## Example 3 - Масив об'єктів

// Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// каміння з таким ім'ям, ціною та кількістю з об'єкта

// ### Код

// ```js

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName){
//    let totalPrice = 0;

//     for (const stone of stones){
//       if(stone.name === stoneName){
//         totalPrice = (stone.price * stone.quantity); 
//         continue; 
//       }
//     }
//      return totalPrice;
//   }
//   console.log(calcTotalPrice(stones, 'Сапфір'));
// ```

// ## Example 4 - Комплексні завдання

// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

// ```js

// // Типів транзакцій всього два.
// // Можна покласти чи зняти гроші з рахунку.

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /* Кожна транзакція це об'єкт із властивостями: id, type та amount*/

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /* Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.*/

//   createTransaction(amount, type) {
//     return{
//         id: this.transactions.length,
//         amount,
//         type, 
//     };
//   },

//   /*Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій*/

//   deposit(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

//     this.balance += amount;
//     this.transactions.push(transaction);
//   },

//   /* Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів. */

//   withdraw(amount) {
//     if(amount > this.balance){
//     console.log(`зняття такої суми не можливе, недостатньо коштів.`);
//     return;
//     }
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

//     this.balance -= amount;
//     this.transactions.push(transaction);
//   },

//   /* Метод повертає поточний баланс */

//   getBalance() {
//     return this.balance;
//   },

//   /* Метод шукає та повертає об'єкт транзакції по id*/

//   getTransactionDetails(id) {
// for (const transaction of this.transactions){
// if(transaction.id === id)
//     return transaction;  
// }
//   },

//   /* Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій*/

//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions){
//         if(transaction.type === type ){
//            sum  += 1;
//            return sum;
//         };
       
//   }
// }
// }

// console.log(account.getBalance());

// account.deposit(100);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(50);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log('->', account.getTransactionDetails(1));
// account.deposit(200);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.deposit(200);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));

// ```






//  * Работем с коллекцией товаров в корзине:
//  * - getItems()
//  * - add(product)
//  * - remove(productName)
//  * - clear()
//  * - countTotalPrice()
//  * - increaseQuantity(productName)
//  * - decreaseQuantity(productName)
//  *
//  * { name: '🍎', price: 50 }
//  * { name: '🍇', price: 70 }
//  * { name: '🍋', price: 60 }
//  * { name: '🍓', price: 110 }
//  */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       const item = items[i];

//       if (productName === item.name) {
//         console.log('нашли такой продукт ', productName);
//         console.log('индекс: ', i);

//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;

//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }

//     return total;
//   },
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// console.table(cart.getItems());

// // console.log('Total: ', cart.countTotalPrice());

// cart.remove('🍇');
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());



const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
      for (const potion of this.potions){
      if (potion.name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
  // Ошибка! Зелье ${newPotion} уже в вашем инвентаре!`
      }
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
           this.potions.splice(i, 1); 
      }      
      }
       return `Potion ${potionName} is not in inventory!`; 
    },
    updatePotionName(oldName, newName) {
  for (let i = 0; i < this.potions.length; i += 1) {
      if (oldName === this.potions[i].name) {
       this.potions[i].name =  newName;   
      }    
  }
  return `Potion ${oldName} is not in inventory!`; 
    },
    // Change code above this line
  };


  console.table(atTheOldToad.getPotions() );
  atTheOldToad.removePotion('Stone skin');
  console.table(atTheOldToad.removePotion());

  atTheOldToad.removePotion("Invisibility");
  console.log(atTheOldToad.removePotion());
  
//   console.log('Total: ', cart.countTotalPrice());
  
  atTheOldToad.updatePotionName("Invisibility");
  console.table(atTheOldToad.updatePotionName());
  
//   atTheOldToad.decreaseQuantity('🍋');
//   atTheOldToad.decreaseQuantity('🍋');
//   console.table(atTheOldToad.getItems());


  
//* Работем с коллекцией карточек в trello* - Метод splice()* - Удалить* - Добавить* - Обновить*/

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ]; 
//   console.table(cards);
  /** Удаление (по индексу), метод indexOf()*/
  
  // const cardToRemove = 'Карточка-3';
  // const index = cards.indexOf(cardToRemove);
  // console.log(index);
  
  // cards.splice(index, 1);
  // console.table(cards);
  
  /** Добавление (по индексу)*/
  // const cardToInsert = 'Карточка-6';
  // const index = 3;
  
  // cards.splice(index, 0, cardToInsert);
  // console.table(cards);
  
  /** Обновление (по индексу)*/
  const cardToUpdate = 'Карточка-4';
  const index = cards.indexOf(cardToUpdate);  
//   console.log(index);
  
  cards.splice(index, 1, 'Обновленная карточка-4'); 
//   console.table(cards);