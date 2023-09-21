/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

// Task1
console.log("0 – это ноль");
for (let i = 1; i < 11; i += 2) {
  console.log(`${i} – нечетное число`);
  console.log(`${i + 1} – четное число`);
}
// Task2
array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log(array);
// Task3
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
arr = Array(5);
for (let index = 0; index < arr.length; index++) {
  arr[index] = getRandomInt(0, 9);
}
console.log(arr);
console.log(arr.reduce((f, el) => f + el));
let min = Math.min(...arr);
console.log(min);
console.log(arr.includes(3));
