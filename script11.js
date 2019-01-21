"use strict";
const placesSharm = 15;
const placesHurgada = 25;
const placesTaba = 26;
const places = prompt("Введите число необходимых мест");
debugger;
if (!places) {
  alert("Нам очень жаль, приходите еще!");
} else if (places < 1 || places % 1 !== 0) {
  alert("Ошибка ввода!");
} else if (
  places > placesSharm &&
  places > placesHurgada &&
  places > placesTaba
) {
  alert("Извините, столько мест нет ни в одной группе!");
} else if (
  places <= placesSharm &&
  confirm("Есть место в группе Sharm. Согласны ли Вы быть в этой группе?")
) {
  alert("Приятного путешествия в группе Sharm");
} else if (
  places <= placesHurgada &&
  confirm("Есть место в группе Hurgada. Согласны ли Вы быть в этой группе?")
) {
  alert("Приятного путешествия в группе Hurgada");
} else if (
  places <= placesTaba &&
  confirm("Есть место в группе Taba. Согласны ли Вы быть в этой группе?")
) {
  alert("Приятного путешествия в группе Taba");
} else {
  alert("Нам очень жаль, приходите еще!");
}
