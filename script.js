casillas = [
    'No canta enemigos',
    'Le matan y no lo canta',
    'Muere por hacer slow peek',
    'Pánico al disparar y no acierta ni una bala',
    'Canta FOB sin especificar Radio o HAB',
    'Usa local para cantar enemigos',
    'No avisa de Radio o HAB por discord',
    'Mira al médico mientras le está curando',
    'Ragea por la radio',
    'SL que dice "No sé"',
    'Repite mensajes ya dichos porque no escucha',
    'Dispara a enemigos que no están jugando al objetivo',
    'Cruza un campo sin cobertura',
    'Cruza una carretera en diagonal',
    'No coopera con los demás por local',
    '10 segundos sin abrir el mapa',
    'Patrulla sin médico',
    'Incapaz de matar al conductor de un logi',
    'Spawnea en rally sin avisar del timer',
    'Spawnea donde no es',
    'Actitud de perdedor',
    'Se queja de las otras patrullas y tiene KD negativo',
    'Cuestiona al SL',
    'Lanza humo sobre los aliados',
    'Hace repeek',
    'CQB en semi',
    'Peekea mientras recarga'
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

