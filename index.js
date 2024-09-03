const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task");

// Function to add a new task
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!")
  }else {
    const listItem = document.createElement("li");
    const taskSpan = document.createElement("span");
    
    taskSpan.textContent = taskText;
    taskSpan.addEventListener("click", () => {
      taskSpan.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    newTaskInput.value = "";
  }
}

// Event listener for the 'Add Task' button
addTaskButton.addEventListener("click", addTask);

// Add task when pressing "Enter" key
newTaskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
