const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
const canvas = document.querySelector(".canvas");
const startButton = document.getElementById("start");
let colorInterval = null;
let modeLevel = -1;
const levels = [
    {interval: 1000, label: "Level-1"},
    {interval: 500, label: "Level-2"},
    {interval: 300, label: "Level-3"}
];

function GenerateColor(){
    let hex="0123456789abcdef";
    let color="#";

    for(let i=0; i<6; i++){
        let random=Math.floor(Math.random()*16);
        color += hex.charAt(random);
    }
    return color;
}

function updateStartButtonLabel() {
    if (startButton) {
        if (modeLevel === -1) {
            startButton.textContent = "Start";
        } else {
            startButton.textContent = levels[modeLevel].label;
        }
    }
}

buttons.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        if(e.target.id ==="grey"){
            body.style.backgroundColor = "rgb(83, 83, 83)";
            canvas.style.backgroundColor = "rgb(83, 83, 83)";
        }
        if(e.target.id ==="red"){
            body.style.backgroundColor = "red";
            canvas.style.backgroundColor = "red";
        }
        if(e.target.id ==="green"){
            body.style.backgroundColor = "green";
            canvas.style.backgroundColor = "green";
        }
        if(e.target.id ==="blue"){
            body.style.backgroundColor = "blue";
            canvas.style.backgroundColor = "blue";
        }
        if(e.target.id ==="white"){
            body.style.backgroundColor = "white";
            canvas.style.backgroundColor = "white";
        }
        if(e.target.id ==="random"){
            const randomColor = GenerateColor();
            body.style.backgroundColor = randomColor;
            canvas.style.backgroundColor = randomColor;
        }
        if(e.target.id ==="start"){
            modeLevel = (modeLevel + 1) % levels.length;
            updateStartButtonLabel();
            if (colorInterval) {
                clearInterval(colorInterval);
            }
            colorInterval = setInterval(function() {
                const randomColor = GenerateColor();
                body.style.backgroundColor = randomColor;
                canvas.style.backgroundColor = randomColor;
            }, levels[modeLevel].interval);
        }
        if(e.target.id ==="stop"){
            if (colorInterval) {
                clearInterval(colorInterval);
                colorInterval = null;
            }
            modeLevel = -1;
            updateStartButtonLabel();
        }
    })
});
updateStartButtonLabel();