function aleatorio(inicio, fin) {
    if (!inicio) {
        inicio = 0;
    }
    if (!fin) {
        fin = 100;
    }
    fin = fin - inicio;

    return Math.floor(Math.random() * fin) + inicio;
}

function JuegoDelNumero() {
    var numeroBuscado = aleatorio(1, 100);
    var numeroIntroducido;
    var intentos = 0;
    var encontrado = false;
    do {
        intentos += 1;
        numeroIntroducido = +prompt('Dame tu numero (' + intentos + ' de 10):');
        if (numeroBuscado === numeroIntroducido) {
            encontrado = true;
            break;
        } else if (numeroBuscado > numeroIntroducido) {
            alert('Mi número es mayor.');
        } else {
            alert('Mi número es menor.');
        }
    } while (intentos < 10);
    if (encontrado) {
        alert('Bieeen!!! Acertaste.');
    } else {
        alert('Upsss! Se acabaron los intentos, el número era el ' + numeroBuscado);
    }
    return encontrado;
}

function dameArray(numeroElementos, valorPorDefecto) {
    var rslt = new Object();
    for (var ind = 0; ind < numeroElementos; ind++) {
        rslt[ind] = valorPorDefecto + (arguments[2] != undefined ? arguments[2] : "");
    }
    return rslt;
}

function damePrimos(num) {
    var calculos = 0;
    var cuantos = +num;
    var rslt = [];
    var candidato = 2;
    while (cuantos) {
        while (true) {
            var esPrimo = true;
            for (var indice in rslt) {
                calculos++;
                if (candidato % rslt[indice] == 0) {
                    esPrimo = false;
                    break;
                }
            }

            candidato++;
            if (esPrimo) {
                rslt.push(candidato - 1);
                break;
            }
        }
        cuantos--;
    }
    console.log('Calculos: ' + calculos);
    return rslt;
}