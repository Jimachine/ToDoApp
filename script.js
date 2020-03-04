document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#user-input").addEventListener("reset", clearAll);
document.querySelector("#task-list").addEventListener("click", clicked);

function addTask(e)

        {
            e.preventDefault();
            let input = document.querySelector("#task");

            if (input.value !== "")
            {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = '<input type="checkbox" class="checkbox">'
                                + '<p class="unchecked">' + input.value + '</p>'
                                + '<i class="fas fa-arrow-up"></i>'
                                + '<i class="fas fa-arrow-down"></i>'
                                + '<i class="fas fa-trash"></i>'
                ul.appendChild(li);
                document.getElementById("task").value = "";

            }
        }

function clearAll()

        {
            let tasks = document.querySelector("#task-list");

            while (tasks.hasChildNodes()) {
                tasks.removeChild(tasks.firstChild);
            }

        }

function clicked(e)

        {  

                if (e.target.className == "fas fa-trash")
                {
                    var target = e.target;
                    var toDelete = target.parentNode;
                    var parentNode = toDelete.parentNode;
                    parentNode.removeChild(toDelete);
                }

                else if (e.target.className == "checkbox")
                {
                    if (e.target.checked == true) {
                        e.target.parentNode.querySelector(".unchecked").className = "checked";
                    }

                    else {
                        e.target.parentNode.querySelector(".checked").className = "unchecked";
                    }
                }

                else if (e.target.className == "fas fa-arrow-down")
                {
                    
                }
        }