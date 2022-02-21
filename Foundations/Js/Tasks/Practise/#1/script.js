function add7() {
    const a = window.prompt("Number?(to add to 7) ");
    sum = +a + +7; //appending the variable / number with "+" makes it a number and not a string
    alert(sum);
}
add7()

function multiply() {
    let num1 = window.prompt("What is the first number?");
    let num2 = window.prompt("What is the second number?");
    sum2 = num1 * num2;
    alert(sum2);
}
multiply()

function capitalise() {
    let stringUncapped = window.prompt("What is the word that you would like the first word capitalised?");
    const stringCapped = stringUncapped.charAt(0).toUpperCase();
    alert(stringCapped + (stringUncapped.slice(1)) );

}
capitalise()

function lastLetter() {
    let stringWhole = window.prompt("What is the word you would like the last letter to be shown?");
    const stringLast = stringWhole.charAt(stringWhole.length-1);
    alert(stringLast)
}
lastLetter()

/* lesson has been completed  -hell yeah! */