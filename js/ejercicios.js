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

function dameArray(numeroElementos, valorPorDefecto = "", ...resto) {
    var rslt = [];
    for (var ind = 0; ind < numeroElementos; ind++) {
        rslt[ind] = valorPorDefecto + (resto.length > 0 ? resto[0] : "");
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

function Juego(maxIntentos, valores) {
    var numeroBuscado;
    this.intentos;
    this.encontrado;
    this.mensaje;
    this.Inicializa = function () {
        numeroBuscado = aleatorio(1, valores);
        this.intentos = 0;
        this.encontrado = false;
        this.mensaje = 'Listo para jugar';
    }

    this.Inicializa();

    this.PruebaCon = function (numeroIntroducido) {
        if (this.intentos >= maxIntentos)
            throw new Error("Excedido el numero de intentos");
        this.intentos += 1;
        if (numeroBuscado == numeroIntroducido) {
            this.encontrado = true;
            this.mensaje = 'Bieeen!!! Acertaste.';
            return this.mensaje;
        }
        if (this.intentos >= maxIntentos) {
            this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + numeroBuscado;
            return this.mensaje;
        }
        if (numeroBuscado > numeroIntroducido) {
            this.mensaje = 'Mi número es mayor.';
            return this.mensaje;
        }
        this.mensaje = 'Mi número es menor.';
        return this.mensaje;
    }
    this.DameMaxIntentos = function () { return maxIntentos; }
}

//Juego.prototype.DameMaxIntentos = function() { return maxIntentos; }
//Juego.prototype.DameIntento = function () { return this.intentos + 1; }

class JuegoConClase {
    #maxIntentos;
    #valores;
    #numeroBuscado;
    constructor(maxIntentos, valores) {
        this.#maxIntentos = maxIntentos;
        this.#valores = valores;
        this.Inicializa();
    }
    Inicializa() {
        this.#numeroBuscado = aleatorio(1, this.#valores);
        this.intentos = 0;
        this.encontrado = false;
        this.mensaje = 'Listo para jugar';
    };
    PruebaCon(numeroIntroducido) {
        if (this.intentos >= this.#maxIntentos)
            throw new Error("Excedido el numero de intentos");
        this.intentos += 1;
        if (this.#numeroBuscado == numeroIntroducido) {
            this.encontrado = true;
            this.mensaje = 'Bieeen!!! Acertaste.';
            return this.mensaje;
        }
        if (this.intentos >= this.#maxIntentos) {
            this.mensaje = 'Upsss! Se acabaron los intentos, el número era el ' + this.#numeroBuscado;
            return this.mensaje;
        }
        if (this.#numeroBuscado > numeroIntroducido) {
            this.mensaje = 'Mi número es mayor.';
            return this.mensaje;
        }
        this.mensaje = 'Mi número es menor.';
        return this.mensaje;
    };
    get MaxIntentos() { return this.#maxIntentos; };

    get Intento() { return this.intentos + 1; }
}
