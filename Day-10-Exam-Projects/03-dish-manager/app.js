window.addEventListener("load", solve);

function solve() {
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let age = document.getElementById("age");
  let genderType = document.getElementById("genderSelect");
  let dishD = document.getElementById("task")
  let box = document.getElementById("in-progress");
  let finished = document.getElementById("finished");
  let progress = document.getElementById("progress-count")

  let btn = document.getElementById("form-btn");
  btn.addEventListener("click", onClickSubmit);
  let progresVlue=0

  function onClickSubmit(ev) {
    ev.preventDefault();
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let ageValue = age.value;
    let dishDescription =dishD.value

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    dishD.value= "";
    progresVlue+=1

    progress.textContent=progresVlue
    

    if (firstNameValue != "" && lastNameValue != "" && ageValue != "") {
      let newField = document.createElement("li");
      newField.className = "each-line";
      box.appendChild(newField);

      
      let clientInfo = createElements(
        "h4",
        {},
        `${firstNameValue} ${lastNameValue}`
      );
      let descriptionField = createElements(
        "p",
        {},
        `${genderType.value}, ${ageValue}`
      );

      let dishInfo = createElements(
        "p",
        {},
        `Dish description: ${dishDescription}`
      );

      let editBtn = createElements(
        "button",
        { className: "edit-btn" },
        "Edit"
      );
      let completeBtn = createElements(
        "button",
        { className: "complete-btn"},
        "Mark as complete"
      );

      function createElements(element, attr, content) {
        let newElement = document.createElement(element);
        newElement.textContent = content;
        for (let a in attr) {
          newElement[a] = attr[a];
        }

        newField.appendChild(newElement);
        progress.value+=1

        return newElement;
      }

      editBtn.addEventListener("click", (ev)=> {onClickStart(ev,firstNameValue,lastNameValue,ageValue,dishDescription)});
      completeBtn.addEventListener("click", onClickFinish)

    

      function onClickStart(ev,_firstName,_lastName,_age,_dish) {
        ev.target.parentNode.remove();

        firstName.value = _firstName;
        lastName.value = _lastName;
        age.value = _age;
        dishD.value = _dish;
        progresVlue-=1

        progress.textContent= `${progresVlue}`
      }
      function onClickFinish() {
        let newDiv = document.createElement("li");
        newDiv.className = "each-line";
        finished.appendChild(newDiv);

        newDiv.appendChild(clientInfo);
        newDiv.appendChild(descriptionField);
        newDiv.appendChild(dishInfo);

        newField.remove();
        let clearBtn = document.getElementById("clear-btn");
      clearBtn.addEventListener("click", clear);
      progresVlue-=1

      progress.textContent= `${progresVlue}`

      function clear(ev2) {
        newDiv.remove();
      }
      }
      
    }
  }
}
