let html = document.querySelector('.elem').innerHTML; // error if it's null



let user = {}; // user has no address

alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

// ReferenceError: user is not defined
user?.address;

let aa = null;

alert( aa?.address ); // undefined
alert( aa?.address.street ); // undefined


let userAdmin = {
  admin() {
    alert("I am admin");
  }
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)




let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined


delete user?.name; // delete user.name if user exists