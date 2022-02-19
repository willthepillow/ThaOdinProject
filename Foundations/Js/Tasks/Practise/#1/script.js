function add7() {
    const a = window.prompt("Number?(to add to 7) ")
    sum = +a + +7 //appending the variable / number with "+" makes it a number and not a string
    alert(sum)
}
add7()

function multiply() {
    let num1 = window.prompt("What is the first number?")
    let num2 = window.prompt("What is the second number?")
    sum2 = num1 * num2
    alert(sum2)
}
multiply()