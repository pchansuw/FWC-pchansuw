const leftInput =
    document.getElementById("left");

const rightInput =
    document.getElementById("right");

const operator =
    document.getElementById("operator");

const submit =
    document.getElementById("submit");


submit.addEventListener("click", function () {

    const leftText = leftInput.value;

    const rightText = rightInput.value;


    if (
        !/^\d+$/.test(leftText) ||
        !/^\d+$/.test(rightText)
    ) {

        alert("Error :(");

        return;
    }


    const left = Number(leftText);

    const right = Number(rightText);

    let result;


    if (
        (operator.value === "/" ||
        operator.value === "%") &&
        right === 0
    ) {

        alert("It's over 9000!");

        console.log("It's over 9000!");

        return;
    }


    if (operator.value === "+") {

        result = left + right;

    } else if (operator.value === "-") {

        result = left - right;

    } else if (operator.value === "*") {

        result = left * right;

    } else if (operator.value === "/") {

        result = left / right;

    } else if (operator.value === "%") {

        result = left % right;

    }


    alert(result);

    console.log(result);

});


setInterval(function () {

    alert("Please, use me...");

}, 30000);