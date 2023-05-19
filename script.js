casillas = [
    'Alguien hace blue on blue',
    'Alguien dice blue AND blue',
    'Blue! Blue! Blue! Blue! (Al menos x4)',
    'A Diablo se le cuela el audio del stream',
    'Diablo pide permiso para coger un RPG',
    'Alguien tira mal una granada',
    'A alguien se le escapa un tiro',
    'Alguien dice Contacto o Tangos',
    'Granada de humo que nos ciega a nosotros más que al enemigo',
    'Granada de humo tapando la LZ',
    'Alguien se desmaya por no comer o beber',
    'Chama explota',
    'El heli hace una pasadita antes de aterrizar',
    'El heli se estrella',
    'Alguien se mete al server cuando no debe',
    'Alguien le da al verde cuando no debe',
    'Lupago dice OSHTIA',
    'Lupago dice Vamos! Vamos! Vamos! (Al menos x3)',
    'Alguien se pierde',
    'Macías pregunta algo',
    'Águila hace referencia a que es militar',
    'Asierrar no aparece un viernes',
    'Diablo dice que no tiene tiempo por las niñas',
    'Diablo dice que lleva 10 años',
    'A Chulaco no se le entiende',
    'Dunkan hace reunión de líderes',
    'Reporte por radio desordenado',
    'Alguien no respeta la formación',
    'A alguien se le encasquilla el arma',
    'A alguien se le cocina el arma',
    'Diablo pide turno en el debrief',
    'Alguien mata a algún civil',
    'Metal reúne a su patrulla para una orden simple',
    'Alguien se equivoca de dirección con el coche',
    'Alguien dispara AT sin comprobar el backblast',
    'Alguien se inventa un palabro',
    'Alguien se sube en el heli donde no debe'

]

window.onload = () =>
{
    var i = casillas.length, temp, newCasillas = casillas, index;

    while (i--)
    {
        temp = newCasillas[i];
        index = Math.floor(Math.random() * casillas.length)

        newCasillas[i] = newCasillas[index];
        newCasillas[index] = temp;
    }
    newCasillas = newCasillas.slice(0, 17);

    var tarjeta = document.getElementById('tarjeta');
    var rowCount = [5, 5, 5, 5];

    rowCount.forEach((count, rowIndex) =>
    {
        var row = document.createElement('div');
        row.style.display = "flex"; // Make it a flex container to arrange children in a row
        row.style.justifyContent = "start"; // Align children to the start of the row

        for (var j = 0; j < count; j++) 
        {
            var casilla = document.createElement('div');
            casilla.classList.add("col");
            casilla.style.height = "200px";

            // Only add casillaInner to the first two casillas of the last row
            if (rowIndex < 3 || (rowIndex == 3 && j < 2))
            {
                var texto = newCasillas[rowIndex * 5 + j];

                var casillaInner = document.createElement('div');
                casillaInner.classList.add("fs-4");
                casillaInner.classList.add("mx-auto");
                casillaInner.classList.add("px-3");
                casillaInner.classList.add("py-3");
                casillaInner.classList.add("text-light");
                casillaInner.style.height = "95%";
                casillaInner.classList.add("border", "border-primary");
                casillaInner.textContent = texto;

                casilla.appendChild(casillaInner);
            }

            row.appendChild(casilla);
        }

        tarjeta.appendChild(row);
    });


    var celdas = Array.from(document.getElementsByClassName("fs-4"));
    celdas.forEach((celda) =>
    {
        celda.onclick = () =>
        {
            if (celda.style.background == '')
            {
                celda.style.background = 'DarkSlateGray';
                checkBingo();
            }
            else
            {
                celda.style.background = '';
            }
        };
    });
}
