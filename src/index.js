import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  createIncompleteList(inputText);
  document.getElementById("add-text").value = "";
  // alert(inputText);
};

const deleteFromIncompletedList = (target) => {
  document.getElementById("incompleted-list").removeChild(target);
};

const deleteFromCompletedList = (target) => {
  document.getElementById("completed-list").removeChild(target);
};

const createIncompleteList = (text) => {
  // Generate div tag
  const div = document.createElement("div");
  div.className = "list-row";

  // Generate li tag
  const li = document.createElement("li");
  li.innerText = text;

  document.getElementById("incompleted-list").appendChild(div);

  // Complete button
  const completedButton = document.createElement("button");
  completedButton.innerText = "Complete";

  completedButton.addEventListener("click", () => {
    // Element to add as complete
    const completeTarget = completedButton.parentNode;

    // Remove from incomplete
    deleteFromIncompletedList(completeTarget);

    // Todo text
    const text = completeTarget.firstElementChild.innerText;

    // Clean contetn under div
    completeTarget.textContent = null;

    // Add Todo text in completed line
    const li = document.createElement("li");
    li.innerText = text;

    // Add revert button
    const revertButton = document.createElement("button");
    revertButton.innerText = "Revert";

    revertButton.addEventListener("click", () => {
      const deleteTarget = revertButton.parentNode;
      deleteFromCompletedList(deleteTarget);

      const text = revertButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // Append into parent div
    completeTarget.appendChild(li);
    completeTarget.appendChild(revertButton);

    document.getElementById("completed-list").appendChild(completeTarget);
  });

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompletedList(deleteTarget);
  });

  div.appendChild(li);
  div.appendChild(completedButton);
  div.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
