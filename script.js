"use strict";
let countShow = document.querySelector(".countShow");
countShow.value = 0;
function increment() {
  countShow.innerHTML++;
}
function decrement() {
  countShow.innerHTML--;
}
function reset() {
  countShow.innerHTML = 0;
}
