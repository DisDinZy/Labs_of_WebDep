// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;


let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500


let aaa = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(aaa); // toString -> John
alert(aaa + 500); // toString -> John500


let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation