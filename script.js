document.querySelector("#user-input").addEventListener("submit", addTask);
document.querySelector("#task-list").addEventListener("click", clicked);

function addTask(e)

        {
            e.preventDefault();
            let input = document.querySelector("#task");

            if (input.value !== "")
            {
                let ul = document.querySelector('ul');
                let li = document.createElement('li');
                li.innerHTML = '<input type="checkbox" class="checkbox">' + '<p class="unchecked">' + input.value + '</p>' + '<i class="fas fa-trash"></i>';
                ul.appendChild(li);
                document.getElementById("task").value = "";

            }
        }

function clicked(e)

        {  
                if (e.target.tagName == "I")
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