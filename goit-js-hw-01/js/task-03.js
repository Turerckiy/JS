"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;

let adminPassword = prompt("Введите пароль администратора");
if (adminPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
  alert(message);
} else if(adminPassword === null){
  message = "Отменено пользователем!";
  console.log(message);
} else {
  message = "Доступ запрещен, неверный пароль!";
  alert(message);
}

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.
//  При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением
//  константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не
// выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
