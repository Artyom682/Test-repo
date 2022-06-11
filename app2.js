// ГЛАВА - ЛОГИЧЕСКИЕ ОПЕРАТОРЫ (https://learn.javascript.ru/logical-operators)
// НЕ НАХОДИТСЯ В ДИАПАЗОНЕ 14 и 90 (без !)

/*let age = prompt('Какой age?')
if (age <= 14 || age >= 90 ) {
    console.log(`Значение ${age} вне диапазона`)
}*/


// НЕ НАХОДИТСЯ В ДИАПАЗОНЕ 14 и 90 (c !)


// let age = prompt('Какой age?');
// if (!(age >= 14 && age <= 90)) {
//     console.log(`Значение ${age} не находится в диапазоне 14 и 90`)
// } else {
//     console.log(`Значение ${age} находится в диапазоне 14 и 90`)
// }

/*let age2 = age >= 14; // age, который меньше 14, будет false, !age = true
let age3 = age <= 90; // age, который больше 90, будет false

if (!age2 || !age3) {
    console.log(`Значение ${age} не находится в диапазоне 14 и 90`)
} else {
    console.log(`Значение ${age} находится в диапазоне 14 и 90`)
}*/








/*let yourLogin = prompt('Ваш login')
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
}*/






let yourLogin = prompt('Ваш login') // Например, вводим 'Артем'


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
}


// Нужно проверить 3 значения: esc, пустое или любое другое значение (!= Админ), Админ


















