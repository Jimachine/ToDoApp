function addTask()

        {
            var listOfTasks = document.createElement("UL");                
            var enteredTask = document.createTextNode("task");    // i feel like this should be getElementById with the ID of my input text box but it breaks if i change it to that.         
            listOfTasks.appendChild(enteredTask);                              
            document.getElementById("task-list").appendChild(listOfTasks);
        }