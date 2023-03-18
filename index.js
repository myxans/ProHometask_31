/*1) Що виведе код нижче?

let promise = new Promise(function (resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);*/

ОТВЕТ: 1

/*2) Вбудована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах.
Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до 
нього .then:*/

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

delay(6000).then(() => alert('виконалось через 6 секунди'));

/*3) Створіть функцію, яка повертає об'єкт Promise. Обіцяйте повернути число після затримки 2 секунди.*/

let promise = new Promise(function(resolve) {
  setTimeout(() => resolve(2), 2000);
});

promise.then(alert);

/*4) Створіть функцію, яка приймає масив чисел та повертає Promise, що виконується після знаходження максимального числа в масиві.*/

let array = [5, 10, 3, 14, 18];

let promise2 = new Promise(function (resolve) {
    setTimeout(() => resolve(array.reduce((a, b) => a > b ? a : b)), 10000)
});

promise2.then(alert);