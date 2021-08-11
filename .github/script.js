const mazeSpace = document.getElementById("mazeSpace");

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function createMaze() {
    let cont = 1;
    map.forEach(element => {
        let createDiv = document.createElement("div");
        createDiv.id = `line${cont}`;
        createDiv.className = "lines"
        mazeSpace.appendChild(createDiv);
        cont++;
    });
    createWall();
}



console.log(map[0].length);

createMaze();

function createWall() {
    let lin = 0;
    let cont = 0;

    let linDiv = document.getElementById(`line${lin}`);
    let createDiv = document.createElement("div");

    for (let i = 0; i < map[lin].length; i++) {
        if (map[lin][cont] === "W") {
            let linDiv = document.getElementById(`line${lin}`);
            let createDiv = document.createElement("div");
            createDiv.id = `wall${cont}`;
            createDiv.className = "walls";
            linDiv.appendChild(createDiv);
        } else {
            let linDiv = document.getElementById(`line${lin}`);
            let createDiv = document.createElement("div");
            createDiv.id = `passSpace${cont}`;
            createDiv.className = "passSpaces";
            linDiv.appendChild(createDiv);
        }
    }


}