document.querySelector("user-input").addEventListener("submit", addTask);

function addTask(e)

        {
            e.preventDefault();
            let input = document.querySelector("task");
            console.log(input);

            if (input.value !== "") {
                document.querySelector("para").innerHTML = input;
            }
        }