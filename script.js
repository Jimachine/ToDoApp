document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#task-list").addEventListener("click", clicked);

function addTask(e)

        {
            e.preventDefault();
            let input = document.querySelector("#task");

            if (input.value !== "")
            {

                /* var newListItem = document.createElement("LI");
                var newButton = document.createElement("BUTTON");
                var buttonText = document.createTextNode("Delete");
                var textnode = document.createTextNode(input.value);

                newListItem.appendChild(textnode);
                newButton.appendChild(buttonText);

                document.getElementById("task-list").appendChild(newListItem);
                newListItem.appendChild(newButton);
                document.getElementById("task").value = ""; */
                
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = '<p class="unchecked">' + input.value + '</p>' + '&nbsp' + '<input type="checkbox">' + '<button>Delete</button>';
                ul.appendChild(li);
                document.getElementById("task").value = "";

            }
        }

function clicked(e)

        {  

                if (e.target.tagName == "BUTTON")
                {
                    var target = e.target;
                    var toDelete = target.parentNode;
                    var parentNode = toDelete.parentNode;
                    parentNode.removeChild(toDelete);
                }

                else if (e.target.tagName == "INPUT")
                {
                    if (e.target.checked == true) {
                        e.target.parentNode.querySelector(".unchecked").className = "checked";
                    }

                    else {
                        e.target.parentNode.querySelector(".checked").className = "unchecked";
                    }
                }
        }