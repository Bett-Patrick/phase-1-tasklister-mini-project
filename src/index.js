document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit",(e) => {
    e.preventDefault()
    const task = document.querySelector("#new-task-description").value
    createToDo(task)
    form.reset()
  })

  //add task to the ToDo list
  function createToDo(task){
    const li = document.createElement("li")
    li.className = "task"
    const select = document.createElement("select")
    select.innerHTML = `
      <option id = "high" value = "red" style="background-color: red; color:white">high</option>
      <option id = "medium" value = "yellow" style="background-color: yellow; color:white">medium</option>
      <option id = "low" value = "green" style="background-color: green; color:white">low</option>
    `
    select.addEventListener("click", (e) => changeBackgroundColor(e.target.value, li))
    const btn = document.createElement("button")
    btn.textContent = "X"
    btn.id = "delete-button"
    if (task) {
      li.textContent = `${task} `
      li.appendChild(select)
      li.appendChild(btn)
      document.querySelector("#tasks").appendChild(li)
    }

    //remove task when button is clicked
    btn.addEventListener("click", () => li.remove())
  }

  //change background when option is selected 
  function changeBackgroundColor(color, SelectedOption){
    SelectedOption.style.backgroundColor = color
  }

});


