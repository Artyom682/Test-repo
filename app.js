/*
/!* ГЛАВА - ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (https://learn.javascript.ru/logical-operators) *!/
// НЕ НАХОДИТСЯ В ДИАПАЗОНЕ 14 и 90 (без !)

/!*let age = prompt('Какой age?')
if (age <= 14 || age >= 90 ) {
    console.log(`Значение ${age} вне диапазона`)
}*!/


// НЕ НАХОДИТСЯ В ДИАПАЗОНЕ 14 и 90 (c !)


// let age = prompt('Какой age?');
// if (!(age >= 14 && age <= 90)) {
//     console.log(`Значение ${age} не находится в диапазоне 14 и 90`)
// } else {
//     console.log(`Значение ${age} находится в диапазоне 14 и 90`)
// }

/!*let age2 = age >= 14; // age, который меньше 14, будет false, !age = true
let age3 = age <= 90; // age, который больше 90, будет false

if (!age2 || !age3) {
    console.log(`Значение ${age} не находится в диапазоне 14 и 90`)
} else {
    console.log(`Значение ${age} находится в диапазоне 14 и 90`)
}*!/








/!*let yourLogin = prompt('Ваш login')
if (yourLogin == null) {
    alert('Отменено')
} else if (yourLogin != 'Админ') {
    alert('Я вас не знаю')
} else if (yourLogin == 'Админ') {
    let passForAdmin = prompt('Ваш пароль')
    if (passForAdmin == 'Я главный') {
        alert('Здравствуйте')
    } else if (passForAdmin == null) {
        alert('Отменено')
    }  else if (passForAdmin = ' ') {
        alert('Неверный пароль')
}
}*!/






/!*let yourLogin = prompt('Ваш login') // Например, вводим 'Артем'


if (yourLogin == null && yourLogin != 'Админ') {
    alert('Отменено')
} else if (yourLogin == null || yourLogin != 'Админ') {
    alert('Я вас не знаю')
} else if (yourLogin == null || yourLogin != 'Админ' || yourLogin == 'Админ' ) {
    alert('Здравствуйте')
    let passForAdmin = prompt('Ваш пароль')
    if (passForAdmin == 'Я главный' || passForAdmin == '') {
        alert('Здравствуйте')
    } else if (passForAdmin == null) {
        alert('Отменено')
    }
}*!/

// При помощи цикла for выведите чётные числа от 2 до 10.

/!*for (let i = 2; i < 11; i++) {
    alert(i++)*!/
// }
//
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert( i );
//     }
// }



// пользователь вводит числа больше 100 или нажимает отмена => цикл прекращается
// a > 100 || a == undefined;


/!*let i = +prompt();
console.log(i)

for (;i = +prompt();) {
    if (i > 100 || i == 0)
        break
}*!/


// просто число - делится ТОЛЬКО само на себя и на 1, т.е. это число без остатка, которое делится на себя и на 1

// 5%2 == 5/2 с остатком 1

// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j < i; j++) { // проверить, делится ли число..
//             if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//         }
//
//         alert( i ); // простое число
//     }

/!*
let a = 5; // number
a = Boolean(a); // преобразование Number к Boolean
console.log(a);


a = String(a); // преобразование Boolean к String
console.log(typeof a);

a = Number(a); // преобразование String в Number
console.log(typeof a); // string, но NaN, потому что строка не может быть числом
console.log(a);

let b = undefined; // undefined
b = !undefined // преобразование undefined к Boolean (true)
console.log(b)

let c = null; // null
c = !!null; // преобразование null к Boolean (true), а потом Boolean (false)
console.log(c);

let d = NaN; // NaN
d = String(d); // преобразование NaN к String
console.log(d);*!/

// Нужно проверить 3 значения: esc, пустое или любое другое значение (!= Админ), Админ

*/
/*
console.log('start');
setTimeout(function()  {
    console.trace('timer 1')
    setTimeout(function()  {
        console.trace('timer 2')
    }, 0)
}, 0);

setTimeout(function() {
    console.trace('timer 3')
})
console.log('end')*/


console.log(typeof variable); // при выполнении кода к обращению необъявленной переменной,
// она принимает значение и тип данных undefined
console.log(variable);


if ($get_(full)===1){
    // полное прохождение регистрации через ui
} else {
    // регистрация пользователя через api
}
