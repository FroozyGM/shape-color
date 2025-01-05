const colors = [
  {
    title: "Красный",
    hex: "#E32636"
  },
  {
    title: "Желтый",
    hex: "#FDE910"
  },
  {
    title: "Зеленый",
    hex: "#138808"
  },
  {
    title: "Синий",
    hex: "#1560BD"
  }
];

const circleBtn = document.getElementById("circle-btn");
const squareBtn = document.getElementById("square-btn");
const colorContainer = document.querySelector(".colors");
const addTextBtn = document.getElementById("add-text-btn");
const clearBtn = document.getElementById("clear-btn");
const displayArea = document.getElementById("display-area");
const textInput = document.getElementById("text-input");

let currentShape = null;

colors.forEach(color => {
  const listItem = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = color.title;
  button.style.backgroundColor = color.hex;
  button.dataset.color = color.hex;
  listItem.appendChild(button);
  colorContainer.appendChild(listItem);

  button.addEventListener("click", () => {
    if (currentShape) {
      currentShape.style.backgroundColor = color.hex;
    } else {
      alert("Сначала выберите фигуру!");
    }
  });
});

circleBtn.addEventListener("click", () => {
  createShape("circle");
});

squareBtn.addEventListener("click", () => {
  createShape("square");
});

addTextBtn.addEventListener("click", () => {
  const text = textInput.value.trim();
  if (!currentShape) {
    alert("Сначала выберите фигуру!");
  } else if (!text) {
    alert("Введите текст!");
  } else {
    currentShape.textContent = text;
  }
});

clearBtn.addEventListener("click", () => {
  displayArea.innerHTML = "";
  currentShape = null;
});

function createShape(type) {
  displayArea.innerHTML = "";
  const shape = document.createElement("div");
  shape.className = `shape ${type}`;
  displayArea.appendChild(shape);
  currentShape = shape;
}
