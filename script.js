casillas = [
    'Alguien hace blue on blue',
    'Alguien dice blue AND blue',
    'BLUEBLUEBLUEBLUE! (Al menos x4)',
    'A Diablo se le cuela el audio del stream',
    'Alguien tira mal una granada',
    'A alguien se le escapa un tiro',
    'Contacto o Tangos',
    'Granada de humo que nos ciega a nosotros más que al enemigo',
    'Alguien se desmaya por no comer o beber',
    'Chama explota'
]

window.onload = () => {
    var i = casillas.length, temp, newCasillas = casillas, index;

    while (i--) {
        temp = newCasillas[i];
        index = Math.floor(Math.random() * casillas.length)

        newCasillas[i] = newCasillas[index];
        newCasillas[index] = temp;
    }
    newCasillas = newCasillas.slice(0, 8);

    newCasillas.forEach((texto) => {
        var casilla = document.createElement('div');
        casilla.classList.add("col-3");
        casilla.style.height = "200px";

        var casillaInner = document.createElement('div');
        casillaInner.classList.add("fs-3");
        casillaInner.classList.add("mx-auto");
        casillaInner.classList.add("px-3");
        casillaInner.classList.add("py-3");
        casillaInner.style.height = "95%";
        casillaInner.classList.add("border", "border-primary");
        casillaInner.textContent = texto;

        casilla.appendChild(casillaInner);
        document.getElementById('tarjeta').appendChild(casilla);
    });

    var celdas = Array.from(document.getElementsByClassName("fs-3"));
    celdas.forEach((celda) => {
        celda.onclick = () => {
            if (celda.style.background == '') {
                celda.style.background = 'deepskyblue';
                checkBingo();
            }
            else {
                celda.style.background = '';
            }
        };
    });
}

function checkBingo() {
    var celdas = Array.from(document.getElementsByClassName("fs-3"));
    for (const celda of celdas) {
        if (celda.style.background == '') {
            return;
        }
    };
    document.getElementById("bingo").classList.remove("d-none");
}

