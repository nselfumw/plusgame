console.log("plus game")


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const directions = [
    "north",
    "east",
    "south",
    "west"
];

let target;

console.log("target after declaration", target);
function startNewRound() {
    const thumbsDiv = document.getElementById("thumbs");
    thumbsDiv.innerHTML = "";

    for (const direction of directions) {
        const input = document.getElementById(direction);
        input.value = "";
    }

    const seed = getRandomInt(8);
    const value1 = seed;
    const value2 = seed + 1;
    const value3 = seed + 2;
    const value4 = seed + 3;
    target = value1 + value2 + value3 + value4;

    console.log("computed target", value1, target);

    const targetDiv = document.getElementById("target");
    targetDiv.innerHTML = target;
}

function checkAnswers() {
    console.log("target in check answers", target);

    let sum = 0;
    let values = [];
    for (const direction of directions) {
        const input = document.getElementById(direction);
        console.log(direction, "value is", input.value);
        sum += parseInt(input.value);

        values.push(parseInt(input.value));
    }

    console.log("Values", values);

    const thumbsDiv = document.getElementById("thumbs");
    if (sum == target &&
        values[0] + 1 == values[1]
    ) {
        thumbsDiv.innerHTML = "up";
        setTimeout(startNewRound, 1000);
    } else {
        thumbsDiv.innerHTML = "down";
    }
    
    
}

startNewRound();

document.getElementById("button").addEventListener("click", checkAnswers);