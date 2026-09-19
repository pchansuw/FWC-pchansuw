$(document).ready(function () {

    const list = $("#ft_list");


    function createTodo(text) {

        const todo =
            $("<div></div>");


        todo.addClass("todo");


        todo.text(text);


        todo.on("click", function () {

            const answer =
                confirm(
                    "Do you want to remove this TO DO?"
                );


            if (answer) {

                $(this).remove();

                saveTodos();
            }

        });


        list.prepend(todo);
    }


    function saveTodos() {

        const todos = [];


        $(".todo").each(function () {

            todos.push(
                $(this).text()
            );

        });


        document.cookie =
            "todos=" +
            encodeURIComponent(
                JSON.stringify(todos)
            ) +
            "; path=/; max-age=31536000";
    }


    function getCookie(name) {

        const cookies =
            document.cookie.split(";");


        for (
            let i = 0;
            i < cookies.length;
            i++
        ) {

            const cookie =
                cookies[i].trim();


            if (
                cookie.startsWith(
                    name + "="
                )
            ) {

                return cookie.substring(
                    name.length + 1
                );
            }

        }


        return null;
    }


    function loadTodos() {

        const saved =
            getCookie("todos");


        if (saved === null) {

            return;
        }


        const todos =
            JSON.parse(
                decodeURIComponent(saved)
            );


        for (
            let i = todos.length - 1;
            i >= 0;
            i--
        ) {

            createTodo(todos[i]);
        }

    }


    $("#newButton").on(
        "click",
        function () {

            const text =
                prompt(
                    "Enter a new TO DO:"
                );


            if (
                text !== null &&
                text.trim() !== ""
            ) {

                createTodo(
                    text.trim()
                );

                saveTodos();
            }

        }
    );


    loadTodos();

});