const addMessage = (element, message) => {
   const messageElement = document.createElement("li");
   messageElement.textContent = message;
   element.appendChild(messageElement);
};

const first = document.getElementById("first");
addMessage(first, "Page Loading");

document.body.addEventListener("mousemove", () => {
   const second = document.getElementById("second");
   addMessage(second, "Event: mousemove");
});

document.body.addEventListener("click", () => {
   const second = document.getElementById("second");
   addMessage(second, "Event: click");
});
