function question () {
let answer = prompt("What is the first number");
}

for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }else {
            console.log(i);
    }
}

// run through this later - The Odin Project runs through this anyways,
// loop is pretty simple to understand - just need to learn the syntax for it