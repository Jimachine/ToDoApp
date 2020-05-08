document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#user-input").addEventListener("reset", clearAll);
document.querySelector("#task-list").addEventListener("click", clicked);


var lsTasks = localStorage.getItem('tasks');
var tasksArray = [];

if (lsTasks != ""){
    tasksArray = JSON.parse(lsTasks);
    renderTasks()
}



function addTask(e) {
    e.preventDefault();
    // Store text entered into the input field
    let input = document.querySelector("#task");

    if (input.value !== "") {

        tasksArray.push({ name: input.value, complete: false });
        
        renderTasks();
        
        // Clear the input field ready for the next task
        input.value = "";
        updateLS();
    }
}

function updateLS() {
    var stringTasks = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', stringTasks);
}

function renderTasks () {

    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    tasksArray.forEach((task, index) => {
        let li = document.createElement('li');
        li.setAttribute('data-order', index);

        li.innerHTML = `<input type="checkbox" class="checkbox" ${task.complete ? "checked" : ""}>
                        <p>${task.name}</p>
                        <i class="fas fa-arrow-up"></i>
                        <i class="fas fa-arrow-down"></i>
                        <i class="fas fa-trash"></i>`

        // Add the list item to the list
        ul.appendChild(li);
    });
    updateLS();
}

function clearAll()

        {
            //Clear all tasks currently in the list
            let tasks = document.querySelector("#task-list");

            while (tasks.hasChildNodes()) {
                tasks.removeChild(tasks.firstChild);
            }
            // Empty the array
            tasksArray = [];
            updateLS();
        }

function clicked(e)

        {  
                // Delete an individual list item when the trash can is clicked
                if (e.target.className === "fas fa-trash")
                {
                    tasksArray.forEach((task, index) => {
                        let target = parseInt(e.target.parentNode.getAttribute("data-order"));

                        if(index === target)
                        {
                            tasksArray.splice(index, 1);
                            renderTasks();
                            updateLS();
                        }
                    })
                }

                // Move a list item down one place
                else if (e.target.className === "fas fa-arrow-down")
                {
                    let target = parseInt(e.target.parentNode.getAttribute("data-order"));
                    let listSize = document.querySelectorAll('li').length;
                    
                    for (i=0; i < tasksArray.length; i++){
                        // Find a match in the array with the list item clicked and make sure it isnt the last index
                        if(i === (target) && listSize - 1 != target){
                            
                            // List item below the one which was clicked
                            let moveUpPage = tasksArray[i + 1];
                            

                            // Clicked list item
                            let moveDownPage = tasksArray[i];

                            // Re add the items to the array in the corrected positions
                            tasksArray.splice(i, 1, moveUpPage);
                            tasksArray.splice(i + 1, 1, moveDownPage);

                            break;
                        }

                    }
                    renderTasks();
                    updateLS();
                }

                // Move a list item up one place
                else if (e.target.className === "fas fa-arrow-up"){
                    let target = parseInt(e.target.parentNode.getAttribute("data-order"));
                    
                    for (i = 0; i < tasksArray.length; i++){
                        // Find a match in the array with the list item clicked and make sure it isnt the first index
                        if(i === (target) && target != 0){
                            
                            // Clicked list item
                            let moveUpPage = tasksArray[i];
                            // List item above the one which was clicked
                            let moveDownPage = tasksArray[i - 1];

                            // Re add the items to the array in the corrected positions
                            tasksArray.splice(i - 1, 1, moveUpPage);
                            tasksArray.splice(i, 1, moveDownPage);

                            break;
                        }

                    }
                    renderTasks();
                    updateLS();
                }

                else if (e.target.className === "checkbox"){
                    let target = parseInt(e.target.parentNode.getAttribute("data-order"));

                    for (i = 0; i < tasksArray.length; i++){
                        // Find a match in the array with the list item clicked and make sure it isnt the first index
                        if(i === (target) && tasksArray[i].complete === false){
                            tasksArray[i].complete = true;

                            break;
                        }

                        else if (i === (target) && tasksArray[i].complete === true){
                            tasksArray[i].complete = false;

                            break;
                        }

                    }
                    renderTasks();
                    updateLS();
                }
        }