function kk() {
	const a = 1;
  if(true) {
  	let a = 5;
		console.log(a);
  }
  console.log(a);
}

(function() {
var b=4
switch(b) {
  case 1:
  case 3:
    // ...
    break;
  case 2: 
    // ...
    break;
  default:
    // ...
    break;
}

let t = [10, 20, 30];
//t = { x: 1, y: 2};
for (let v of t )
	console.log(v);
})(); 

function calcula(op) {
  switch(op) {
    case '+': return function(a, b) { return a + b; };
    case '-': return function(a, b) { return a - b; };
    case '*': return function(a, b) { return a * b; };
    case '/': return function(a, b) { return a / b; };
    default: throw new Error("Operacion desconocida");
  }
}
let t = [10, 20, 30];
//t = { x: 1, y: 2};

function procesa(init, t, fn) {
	let resl = init;
	for (let v of t )
		resl = fn(resl, v);
	return resl;
}
let fn = calcula('/');


console.log(procesa(100, [10, 20, 30], calcula('-')));

console.log(calcula('/')(2,0) * 0);

let o = { x: 1, y : 2, calcula: function(a, b) { return a + b; } };
o.calcula = function(a, b) { return a - b; };
o.z = 4;
let cmp = 'z';
//delete o.x;
console.log(o.cmp, o["y"], o["calcula"](o[cmp], o.y));
console.log(o);


function MiClase(elId, elNombre) {
	let vm = this;
  vm.id = elId;
  vm.nombre = elNombre;
  vm.muestraId = function() {
  	alert("El ID del objeto es " + vm.id);
	}
}
function Otra() {
  this.id = "otro valor";
  this.nombre = "en el nombre";
}
// MiClase.prototype.ponNombre = function(nom) {
//   this.nombre=nom.toUpperCase();
// }

let padre = {
  ponNombre : function(nom) {
    this.nombre=nom.toUpperCase();
  },
  resumen : function() {
    return this.id + " " + this.nombre;
  }
}
MiClase.prototype = padre;
Otra.prototype = padre;
class ClasePadre{
  ponNombre(nom) {
    this.nombre=nom.toUpperCase();
  }
  resumen() {
    return this.id + " " + this.nombre;
  }
}
class ComoClase extends ClasePadre {
  constructor(elId, elNombre) {
    super();
    this.id = elId;
    this.nombre = elNombre;
    this._edad = 18;
  }
  muestraId() {
  	alert("El ID del objeto es " + this.id);
  }
  get Edad() { return this._edad; }
  set Edad(valor) { 
    if(this._edad == valor) return;
    if(this.valor < 0)
      throw new Error("No puede ser negativa");      
    this._edad = valor; 
  }
  get EsMayorDeEdad() { return this._edad >= 18; }
}

let uno = new MiClase(1, "uno");
let dos = new MiClase(2, "dos");
let tres = new Otra();
let cuatro = new ComoClase(1, "uno");
// cuatro._edad = -1;
cuatro.Edad = 18;
console.log("Clases", cuatro.Edad >= 18, cuatro.EsMayorDeEdad);

uno.muestraId.call(tres);

uno.ponNombre("hola"); dos.ponNombre("mundo");
tres.ponNombre("otra funcion");
console.log(uno.resumen(), dos.resumen(), tres.resumen());
padre.resumen = function() {
  return this.nombre + ", " + this.id;
}
console.log(uno.resumen(), dos.resumen(), tres.resumen());
// // console.log(uno.nombre, dos.nombre);

// // MiClase.prototype.ponNombre = function(nom) {
// //   this.nombre=nom.toLowerCase();
// // }
// // //uno.muestraId(); dos.muestraId();
// // uno.ponNombre("hola"); dos.ponNombre("mundo");
// // console.log(uno.nombre, dos.nombre);

// /*
// function cotilla(msg) {
// 	console.log(msg, this);
// }

// cotilla("Global");
// cotilla.call({hola:'mundo'}, "objeto con call");
// cotilla.apply({hola:'mundo'}, ["objeto con apply"]);
// cotilla = cotilla.bind({hola:'mundo'});
// cotilla("Bind");
// */
// function cotilla(msg) {
// 	console.log(msg, this);
// }
// /*
// //let t = { x:10,y:20,z:30};

// cotilla("Global");
// cotilla.call({hola:'mundo'}, "objeto con call", 2, 3);
// cotilla.apply({hola:'mundo'}, ["objeto con apply", 2, 3]);
// let obj = new cotilla("con new");
// cotilla = cotilla.bind({hola:'mundo'});
// cotilla("Bind");
// cotilla = cotilla.bind({otro:'objeto'});
// cotilla("Otro Bind");
// */
// // let cad = prompt("Dime algo");
// //alert(-(2 / 0));
// //console.log(JSON.stringify(t));
// let cad = '{ "x":10,"d":20,"z":30}';
// var t = JSON.parse(cad);
// console.log(Object.keys(t));
// Object.keys(t).forEach(function(item) {console.log(item.toUpperCase());})
// Object.values(t)
// 	.map(function(item) { return item.toString(); })
// 	.filter(function(item) { return item.match(/^2/); })
// 	.forEach(function(item) {console.log("si lo quito",item);})
// console.log(`2 + 2 \n = ${cad}`);
// /*
// function suma(a, b = "por defecto") {
// 	return a + b;
// }
// cad = "H";
// t =  [...cad];
// console.log(suma(t[0], t[1]));
// console.log(suma(...t));*/