let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string

let aidi = Symbol("aidi");
alert(aidi.toString()); // Symbol(aidi), now it works

let idd = Symbol("idd");
alert(idd.description); // idd



let user = { // belongs to another code
  name: "John"
};

let a = Symbol("a");

user[a] = 1;

alert( user[a] ); // we can access the data using the symbol as the key


let user = { name: "John" };

// Our script uses "id" property
user.id = "Our id value";

// ...Another script also wants "id" for its purposes...

user.id = "Their id value"
// Boom! overwritten by another script!


let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name



// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id