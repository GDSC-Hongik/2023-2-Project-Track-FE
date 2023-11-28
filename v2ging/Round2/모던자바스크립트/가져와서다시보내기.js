// functions.js

import addMenu from "./functions/add.js";
import rollMenu from "./functions/roll.js";
import deleteMenu from "./functions/delete.js";

export { addMenu, rollMenu, deleteMenu };

// index.js

import { addBtn, addInput, list, rollBtn } from "./tags.js";
// 여기에 코드를 작성하세요
import { addMenu, rollMenu, deleteMenu } from "./functions.js";

const data = [];

addBtn.addEventListener("click", () => addMenu(data));
addInput.addEventListener(
  "keypress",
  (e) => e.code === "Enter" && addMenu(data)
);
list.addEventListener(
  "click",
  ({ target }) =>
    target.tagName === "BUTTON" && deleteMenu(data, target.dataset.index)
);
rollBtn.addEventListener(
  "click",
  () => list.classList.contains("rolling") || rollMenu(data)
);
