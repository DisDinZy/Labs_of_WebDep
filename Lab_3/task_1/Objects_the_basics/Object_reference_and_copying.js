let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true


const nam = {
  name: "John"
};

nam.name = "Pete"; // (*)

alert(nam.name); // Pete



let dd = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all dd properties into it
for (let key in dd) {
  clone[key] = dd[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( dd.name ); // still John in the original object



let use = {};
// let's create a circular reference:
// user.me references the user itself
use.me = use;

let clone = structuredClone(use);
alert(clone.me === clone); // true



let usr = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(usr);

alert( usr.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
usr.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related