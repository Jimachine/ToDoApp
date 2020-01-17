document.querySelector("#user-input").addEventListener("submit", addTask);

function addTask(e)

        {
            e.preventDefault();
            var input = document.querySelector("#task");

            if (input.value !== ""){

                var node = document.createElement("LI");
                var textnode = document.createTextNode(input.value);
                node.appendChild(textnode);
                document.getElementById("task-list").appendChild(node);
                document.getElementById("task").value = "";
            }
        }