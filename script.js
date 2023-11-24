function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      var taskList = document.getElementById("task-list");
      var newTask = document.createElement("li");
      newTask.innerHTML = taskText + ' <button class="delete-btn" onclick="removeTask(this)">Delete</button>';
      taskList.appendChild(newTask);
      taskInput.value = "";
    } else {
      alert("Please enter a task!");
    }
  }
  
  function removeTask(task) {
    var taskList = document.getElementById("task-list");
    taskList.removeChild(task.parentNode);
  }
  