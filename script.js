"use strict";
let massege;
const adminLogin = "admin";
const adminPassword = "m4ng0h4ckz";
const cancelLog = "Отменено пользователем";
const wrongLog = "Доступ запрещен. Неверный логин!";
const wrongPass = "Доступ запрещен. Неверный пароль!";
const greet = "Добро пожаловать!";
const logInput = prompt("Пожалуйста, введите логин");
if (logInput === null) {
  alert((massege = cancelLog));
} else if (logInput !== adminLogin) {
  alert((massege = wrongLog));
} else {
  const passInput = prompt("Пожалуйста, введите пароль!");
  if (passInput === null) {
    alert((massege = cancelPass));
  } else if (passInput !== adminPassword) {
    alert((massege = wrongPass));
  } else {
    alert((massege = greet));
  }
}
