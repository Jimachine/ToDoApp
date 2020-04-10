document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#user-input").addEventListener("reset", clearAll);
document.querySelector("#task-list").addEventListener("click", clicked);

let tasksArray = [];

function addTask(e)

        {
            e.preventDefault();
            // Store text entered into the input field
            let input = document.querySelector("#task");

            if (input.value !== "")
            {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                let inputField = document.getElementById("task");

                li.innerHTML = '<input type="checkbox" class="checkbox">'
                                + '<p class="unchecked">' + input.value + '</p>'
                                + '<i class="fas fa-arrow-up"></i>'
                                + '<i class="fas fa-arrow-down"></i>'
                                + '<i class="fas fa-trash"></i>'

                // Add the list item to the list
                ul.appendChild(li);
                // Add the list item to an array
                tasksArray.push(li);
                
                // Clear the input field ready for the next task
                inputField.value = "";

            }
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
                    var target = e.target;
                    var toDelete = target.parentNode;
                    var parentNode = toDelete.parentNode;

                    // Find the matching list item in the array by looping through each index and then deleting it
                    for ( i = 0; i < tasksArray.length; i++){
                        if(tasksArray[i] == toDelete){
                            delete tasksArray[i];
                        }
                    }
                    parentNode.removeChild(toDelete);
                }

                // Change the class name of the checkbox to indicate whether the text should be scored out or not
                else if (e.target.className == "checkbox")
                {
                    if (e.target.checked == true) {
                        e.target.parentNode.querySelector(".unchecked").className = "checked";
                    }

                    else {
                        e.target.parentNode.querySelector(".checked").className = "unchecked";
                    }
                }

                // Move a list item down one space
                else if (e.target.className == "fas fa-arrow-down")
                {
                    let ul = document.querySelector('ul');
                    let li = document.createElement('li');
                    
                    for (i = 0; i < tasksArray.length; i++){
                        // Find a match in the array with the list item clicked and make sure it isnt the last index
                        if(tasksArray[i] == e.target.parentNode && e.target.parentNode != tasksArray[tasksArray.length - 1]){
                            
                            // List item below the one which was clicked
                            let moveUpPage = tasksArray[i + 1];

                            // Clicked list item
                            let moveDownPage = tasksArray[i];

                            // Re add the items to the array in the corrected positions
                            tasksArray.splice(i, 1, moveUpPage);
                            tasksArray.splice(i + 1, 1, moveDownPage);
                        }

                    }
                    // Clear the displayed list and repopulate it using the array
                    ul.innerHTML = '';

                        for (i = 0; i < tasksArray.length; i++){
                            
                            li.innerHTML = tasksArray[i].innerHTML;
                            ul.appendChild(li);
                    }
                }
        }