"use strict";

const table = document.querySelector("table");
const todo = document.getElementById("todo");
const submit = document.getElementById("submit");

let list = [];
const storage = localStorage;

document.addEventListener("DOMContentLoaded", () => {
  const json = storage.todoList;
  if (json == undefined) {
    return;
  }
  list = JSON.parse(json);
  for (const item of list) {
    addItem(item);
  }
});
