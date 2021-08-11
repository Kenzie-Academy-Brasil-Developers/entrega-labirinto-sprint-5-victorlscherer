let mazeSpace = document.getElementById("mazeSpace");




const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];


createWall();
function createWall() {
    let cont = 0;
    map.forEach(element => {
        let createDiv = document.createElement("div");
        createDiv.className = "lines";
        createDiv.id = `line${cont}`;
        createDiv.setAttribute("data-line", `${cont}`);
        mazeSpace.appendChild(createDiv);
        cont++
    });
    createCells();
}

function createCells() {
    for (let line = 0; line < map.length; line++) {
        for (let cell = 0; cell < map[line].length; cell++) {
            if (map[line][cell] === "W") {
                let createDiv = document.createElement("div");
                createDiv.className = "walls";
                createDiv.id = `wall${cell}`;
                mazeSpace.childNodes[line].appendChild(createDiv);
            } else if (map[line][cell] === "S") {
                let createDiv = document.createElement("div");
                createDiv.className = "passSpaces";
                createDiv.id = `passSpace${cell}`;
                mazeSpace.childNodes[line].appendChild(createDiv);
                let createImg = document.createElement("img");
                createImg.src = "./src/img/warrior-240x104.png";
                createImg.id = "hero";
                createDiv.appendChild(createImg);
            } else if (map[line][cell] === "F") {
                let createDiv = document.createElement("div");
                createDiv.className = "passSpaces";
                createDiv.id = `passSpace${cell}`;
                mazeSpace.childNodes[line].appendChild(createDiv);
                let createImg = document.createElement("img");
                createImg.src = "./src/img/Open.gif";
                createImg.id = "tesoure";
                createDiv.appendChild(createImg);
            } else {
                let createDiv = document.createElement("div");
                createDiv.className = "passSpaces";
                createDiv.id = `passSpace${cell}`;
                mazeSpace.childNodes[line].appendChild(createDiv);
            }
        }
    }
}

let hero = document.getElementById("hero");
let lineStart = 9;
let columnStart = 0;

    document.addEventListener("keydown", function move(evt) {
        const keyName = evt.key;
        if (keyName === "ArrowDown") {
            lineStart += 1;
            if (map[lineStart][columnStart] !== "W"){
            let lineNodes = document.getElementById(`line${lineStart}`);
            let arrNodes = lineNodes.childNodes;
            let nextPostion = arrNodes[columnStart];
            nextPostion.appendChild(hero);
            } else {
                lineStart -= 1;
            }
            
        }
        if (keyName === "ArrowUp") {
            lineStart -= 1;
            if (map[lineStart][columnStart] !== "W"){
            let lineNodes = document.getElementById(`line${lineStart}`);
            let arrNodes = lineNodes.childNodes;
            let nextPostion = arrNodes[columnStart];
            nextPostion.appendChild(hero);
            } else {
                lineStart += 1;
            }
            
        }
        if (keyName === "ArrowRight") {
            columnStart += 1;
            if (map[lineStart][columnStart] !== "W" && map[lineStart][columnStart] !== "F"){
            let lineNodes = document.getElementById(`line${lineStart}`);
            let arrNodes = lineNodes.childNodes;
            let nextPostion = arrNodes[columnStart];
            nextPostion.appendChild(hero);
            } else if (map[lineStart][columnStart] === "F") {
                victory();
            } else {
                columnStart -= 1;
            }
            
        }

        if (keyName === "ArrowLeft") {
            columnStart -= 1;
            if (map[lineStart][columnStart] !== "W"){
            let lineNodes = document.getElementById(`line${lineStart}`);
            let arrNodes = lineNodes.childNodes;
            let nextPostion = arrNodes[columnStart];
            nextPostion.appendChild(hero);
            } else {
                columnStart += 1;
            }
            
        }
    });

    function victory() {
        let victorySpace = document.getElementById("victorySpace");
        let victory = document.createElement("div");
        victorySpace.appendChild(victory)
        victory.id = ("victory");
        let createH1 = document.createElement("h1");
        let createP = document.createElement("p");
        let createButton = document.createElement("button");
        createH1.innerText = ("Você venceu!");
        createP.innerText = ("Quer tentar de novo?")
        createButton.innerText = ("Sim")
        createButton.id = ("buttonSim");
        victory.appendChild(createH1);
        victory.appendChild(createP);
        victory.appendChild(createButton);
        let buttonSim = document.getElementById("buttonSim");
        buttonSim.addEventListener("click", function startAgain() {
            location.reload();
        });
    }
    
   
