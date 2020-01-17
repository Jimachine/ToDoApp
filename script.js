document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#task-list").addEventListener("click", removeTask);

function addTask(e)

        {
            e.preventDefault();
            var input = document.querySelector("#task");

            if (input.value !== ""){

                var newListItem = document.createElement("LI");
                var newButton = document.createElement("BUTTON");
                var buttonText = document.createTextNode("Delete");
                var textnode = document.createTextNode(input.value);

                newListItem.appendChild(textnode);
                newButton.appendChild(buttonText);

                document.getElementById("task-list").appendChild(newListItem);
                /* document.getElementById("task-list").appendChild(newButton); */
                newListItem.appendChild(newButton);
                document.getElementById("task").value = "";
            }
        }

function removeTask(e)

        {
            var target = e.target;
            var toDelete = target.parent;
            console.log(e.target.parent);
            var parentNode = toDelete.parent;
            parentNode.removeChild(toDelete);
        }