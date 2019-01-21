"use strict";

let login = prompt("Please, enter your login");
const logins = ["Love", "car", "passw12345", "Bodya", "awram123awr"];
console.log("Existing logins database: ", logins);
const upLogBase = [logins];

const checkLogVal = function(login) {
  if (4 <= login.length && login.length <= 16) {
    return true;
  }
  return false;
};
const checkLogValRes = checkLogVal(login);
const checkIfLogExists = function(logins, login) {
  if (logins.includes(login)) {
    return true;
  }
  return false;
};
const checkIfLogExistsRes = checkIfLogExists(logins, login);
const addLogin = function(logins, login) {
  console.log("Entered login: ", login);
  console.log("login length:", login.length);
  checkLogVal(login);
  console.log("Length Validity (4-16):", checkLogValRes);

  if (!checkLogValRes) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else {
    console.log(
      `Checking login " ${login} " for existance in the base of logins...`
    );
    checkIfLogExists(logins, login);
  }
  if (!checkIfLogExistsRes) {
    console.log("Логин успешно добавлен!");
    console.log("Данный логин отсутствует в базе логинов");
    logins.push(login);
  } else {
    console.log("Такой логин уже используется!");
  }
};
addLogin(logins, login);
console.log("updated base of logins: ", logins);
