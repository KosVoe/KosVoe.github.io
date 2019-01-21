"use strict";
const login = "admin";
const password = "m4ng0h4ckz";
let message;
const userLogin = prompt("Введите Логин");
if (!userLogin) {
  message = "Отменено пользователем!";
} else if (userLogin !== login) {
  message = "Доступ запрещен, неверный логин!";
}
const userPassword = prompt("Введите пароль");
if (!userPassword) {
  message = "Отменено пользователем!";
} else if (userPassword !== password) {
  message = "Доступ запрещен, неверный пароль!";
} else {
  message = "Добро пожаловать!";
}
alert(message);
