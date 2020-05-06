document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#user-input").addEventListener("reset", clearAll);
document.querySelector("#task-list").addEventListener("click", clicked);

let tasksArray = [];

function addTask(e) {
    e.preventDefault();
    // Store text entered into the input field
    let input = document.querySelector("#task");

    if (input.value !== "")
    {

        tasksArray.push({ name: input.value, complete: false });
        let ul = document.querySelector('ul');
        
        renderTasks();
        
        // Clear the input field ready for the next task
        input.value = "";

    }
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
        }

function clicked(e)

        {  
                // Delete an individual list item when the trash can is clicked
                if (e.target.className == "fas fa-trash")
                {
                    tasksArray.forEach((task, index) => {
                        let target = e.target.parentNode.getAttribute("data-order");
                        console.log(index);
                        console.log(target);

                        if(index == target)
                        {
                            tasksArray.splice(index, 1);
                            renderTasks();
                        }
                    })
                }

                // Move a list item down one space
                else if (e.target.className == "fas fa-arrow-down")
                {
                    let ul = document.querySelector('ul');
                    let items = document.querySelectorAll('li');
                    
                    for (i = 0; i < tasksArray.length; i++){
                        // Find a match in the array with the list item clicked and make sure it isnt the last index
                        console.log(tasksArray[i] == e.target.parentNode);
                        console.log(e.target.parentNode != tasksArray[tasksArray.length - 1]);
                        if(tasksArray[i] == e.target.parentNode && e.target.parentNode != tasksArray[tasksArray.length - 1]){
                            
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
                    // Clear the displayed list and repopulate it using the array
                    ul.innerHTML = '';

                        for (i = 0; i < tasksArray.length; i++){

                            let li = document.createElement('li');

                            li.innerHTML = tasksArray[i].innerHTML;
                            ul.appendChild(li);
                    }
                }
        }