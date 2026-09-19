const list = document.getElementById("ft_list");
const newButton = document.getElementById("newButton");


function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo";

    todo.textContent = text;


    todo.addEventListener("click", function () {

        const answer = confirm(
            "Do you want to remove this TO DO?"
        );

        if (answer) {

            todo.remove();

            saveTodos();
        }

    });


    list.prepend(todo);
}


function saveTodos() {

    const todos = [];

    const items = list.querySelectorAll(".todo");


    items.forEach(function (item) {

        todos.push(item.textContent);

    });


    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; path=/; max-age=31536000";
}


function getCookie(name) {

    const cookies = document.cookie.split(";");


    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i].trim();


        if (cookie.startsWith(name + "=")) {

            return cookie.substring(name.length + 1);
        }
    }


    return null;
}


function loadTodos() {

    const saved = getCookie("todos");


    if (saved === null) {

        return;
    }


    const todos =
        JSON.parse(
            decodeURIComponent(saved)
        );


    for (let i = todos.length - 1; i >= 0; i--) {

        createTodo(todos[i]);
    }
}


newButton.addEventListener("click", function () {

    const text = prompt(
        "Enter a new TO DO:"
    );


    if (
        text !== null &&
        text.trim() !== ""
    ) {

        createTodo(text.trim());

        saveTodos();
    }

});


loadTodos();