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
  this.id = elId;
  this.nombre = elNombre;
  console.log(this);
  this.muestraId = function() {
  	alert("El ID del objeto es " + vm.id);
	}
}
function Otra() {
	let vm = this;
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
let uno = new MiClase(1, "uno");
let dos = new MiClase(2, "dos");
let tres = new Otra();

uno.ponNombre("hola"); dos.ponNombre("mundo");
tres.ponNombre("otra funcion");
console.log(uno.resumen(), dos.resumen(), tres.resumen());
// console.log(uno.nombre, dos.nombre);

// MiClase.prototype.ponNombre = function(nom) {
//   this.nombre=nom.toLowerCase();
// }
// //uno.muestraId(); dos.muestraId();
// uno.ponNombre("hola"); dos.ponNombre("mundo");
// console.log(uno.nombre, dos.nombre);

/*
function cotilla(msg) {
	console.log(msg, this);
}

cotilla("Global");
cotilla.call({hola:'mundo'}, "objeto con call");
cotilla.apply({hola:'mundo'}, ["objeto con apply"]);
cotilla = cotilla.bind({hola:'mundo'});
cotilla("Bind");
*/
