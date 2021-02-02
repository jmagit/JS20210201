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
  nombre = elNombre;
  console.log(this);
  this.muestraId = function() {
  	alert("El ID del objeto es " + vm.id);
	}
}
MiClase.prototype.muestraId = function() {
  alert("El ID del objeto es " + this.id);
}
MiClase.prototype.ponNombre = function(nom) {
  this.nombre=nom.toUpperCase();
}

MiClase.bind(o);

let algo =MiClase(1, "dos");

function cotilla(msg) {
	console.log(msg, this);
}

cotilla("Global");
cotilla.call({hola:'mundo'}, "objeto con call");
cotilla.apply({hola:'mundo'}, ["objeto con apply"]);
cotilla = cotilla.bind({hola:'mundo'});
cotilla("Bind");

