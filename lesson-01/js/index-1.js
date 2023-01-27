// # Модуль 1. Заняття 1. Змінні, типи та оператори

// ## Example 1 - Математичні оператори

// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// ```js

// const apples = 47;
// const grapes = 135;
// const total = grapes + apples;
// console.log(total)

// const diff = grapes - apples;
// console.log(diff)


// ```

// <!-- ## Example 2 - Комбіновані оператори

// Заміни вираз перевизначення комбінованим оператором `+=`.

// ```js

// let students = 100;
// students += 50;
// console.log(students);

// ```

// ## Example 3 - Пріоритет операторів

// Розбери пріоритет операторів в інструкції привласнення значення змінної
// `result`.

// ```js

// const result = 108 + (223 - 2) * 5;
// console.log(result);

// ```

// ## Example 4 - Клас Math

// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення
// змінної `value`. Використовуй методи `Math.floor()`, `Math.ceil()` та
// `Math.round()`. Перевір що буде в консолі при значеннях `27.3` та `27.9`.

// ```js

// const value = 27.5;
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value));  //28
// console.log(Math.round(value)); //28

// const value = 27.3;
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value));  //28
// console.log(Math.round(value)); //27

// const value = 27.9;
// console.log(Math.floor(value)); //27
// console.log(Math.ceil(value));  //28
// console.log(Math.round(value)); //28
// ```

// ## Example 5 - Шаблонні рядки

// Склади фразу за допомогою шаблонних рядків `A has B bots in stock`, де A, B -
// змінні вставлені в рядок.

// ```js
// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"
// ```

// ## Example 6 - Методи рядків та чейнінг

// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього
// необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних `weight` та `height`, але не як числа, а в
// вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді
// `24.7` або `24,7`, тобто як роздільник дробової частини може бути
// кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// ```js
// let weight = '88,3';
// let height = '1.75';

// const bmi = ;
// console.log(bmi); // 28.8


// інперактивний підхід, по крокам що програма має зробити
// 1. знайди індекс коми
// 2. виріж рядок до коми
// 3. виріж рядок після коми
// 4. сконтактенуй рядки з крапкою

// let weight = '88,3';
// let height = '1.75';
// const comaIndex = weight.indexOf(',');

// weight = `${weight.slice(0, comaIndex)}.${weight.slice(comaIndex + 1)}`;
// console.log(weight);
// const bmi = weight / height ** 2;

// console.log(bmi.toFixed(1)); // 28.8

// деклеративний підхід - використання реплейс

// const weight = '88,3' .replace(',','.');
// const height = '1.75' .replace(',','.');
 
// const bmi = weight / height ** 2;
// console.log(bmi.toFixed(1)); 
// ```

// ## Example 7 - Оператори порівняння та приведення типів

// Яким буде результат виразів?

// ```js
// console.log(5 > 4); // true

// console.log(10 >= '7'); // true

// console.log('2' > '12'); // true

// порівнює рядки по символьно!!!!
// console.log('2'.charCodeAt(0));
// console.log('1'.charCodeAt(0));

// console.log('2' < '12');  //false

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); //true

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false
// ```

// ## Example 8 - Логічні оператори

// Яким буде результат виразів?

// ```js

// console.log(true && 3); // 3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //kiwi

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); // 2 - false

// console.log((1 && null && 2) > 0); //null

// console.log(null || (2 && 3) || 4); //3
// ```

// ## Example 9 - Значення за замовчуванням та оператор нульового злиття

// Отрефактори код так, щоб у змінну `value` присвоювалося значення
// змінної `incomingValue`, якщо воно не рівне `undefined` або `null`. В
// іншому випадку має присвоюватися значення `defaultValue`. Перевір роботу
// скрипта для наступних значень змінної `incomingValue`: null, undefined, 0,
// false. Використовуй оператор `??` (nullish coalescing operator).

// ```js

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// оператор нульового злиття - ??
// перевіряє лівий операнд -> якщо він не null і не undefined -> повертає його

// ```


// ## Example 10 - Оператор % та методи рядків

// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

// ```js

// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// ``` -->
