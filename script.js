//------------------------1------------------------

var str = "hello";
var num = 1;
var q;

console.log(q);
console.log(str === num); 
console.log(typeof num === 'number');
console.log(str - num);
console.log(num);
console.log(str);

//------------------------2------------------------

var sum = prompt("Введите сумму покупки:");

sum = Number(sum);

if (isNaN(sum) || sum <= 0) {
    console.log("Ошибка: неверные данные.");
} else {
    var discount = 0;

    if (sum < 1000) {
        discount = 0;
    } else if (sum >= 1000 && sum < 5000) {
        discount = 5;
    } else if (sum >= 5000 && sum < 10000) {
        discount = 10;
    } else if (sum >= 10000) {
        discount = 15;
    }

    var total = sum - (sum * discount / 100);
    total= total.toFixed(2);

    console.log("Сумма покупки: " + sum + " руб.");
    console.log("Скидка: " + discount + "%");
    console.log("Итоговая сумма: " + total + " руб.");
}