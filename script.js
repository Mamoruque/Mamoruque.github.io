"use strict";

document.querySelector("button").addEventListener("click", () => {
   const newElement = document.createElement("p");
   newElement.textContent = "点击了没有意义的按钮。";
   newElement.setAttribute("class", "new-message");
   document.querySelector("main").appendChild(newElement);
});
