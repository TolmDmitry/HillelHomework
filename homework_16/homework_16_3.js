/*
3) Для этого задания вам понадобится файл index.html прикрепленный внизу.
Запросите у пользователя число и добавьте в форму теги <input>
(перед кнопкной Register) равных этому числую.
Требования к тегу <input>:
каждый инпут должен содержать класс input-item, value = `Input ${index}`;
последний инпут должен иметь дополнительный класс margin-zero;
создайте собственный класс, со свойством background-color и добавьте его
всем нечетным инпутам;
очистите значение каждому третьему инпуту и задайте ему атрибут placeholder
с любым текстом.
Ожидаемый результат прикреплен внизу.
*/

const createEl = (id, value, tag = "input", _class = "input-item") => {
  const el = document.createElement(tag);
  el.id = id;
  el.value = value;
  el.className = _class;
  return el;
};

let inputs = document.querySelector(".button");
let numInputs = +prompt("Enter number");
for (let i = 0; numInputs > i; i++) {
  if (i % 2 === 0) {
    let inp = createEl("input" + i, "Input " + (i + 1));
    inputs.before(inp);
    inp.classList.add('odd-inputs')
    if ((i + 1) % 3 === 0) {
      inp.placeholder = 'some text';
      inp.value = '';
    }
  } else {
    let inp = createEl("input" + i, 'Input ' + (i + 1));
    inputs.before(inp);
    if ((i + 1) % 3 === 0) {
      inp.placeholder = 'some text';
      inp.value = '';
    }
  };
};
let listInputs = document.body.querySelectorAll('input');
console.log(listInputs)
let lastInput = document.getElementById(`input${numInputs - 1}`);
lastInput.classList.add("margin-zero");