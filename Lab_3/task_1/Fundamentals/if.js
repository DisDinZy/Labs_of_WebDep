let ans = prompt("What's the \"oficial\" name of JavaScript?");

(ans == "ECMAScript") ?
    alert("Right!") : alert("You don't know? \"ECMAScript\” !" );


let num = prompt("Number? ");
if(num>0){
    alert("1");
}
else if(num<0){
    alert(-1);
}
else{
    alert("0");
}

let result = (a + b < 4) ? 'Below' : 'Over';
alert(result);


let message = (login == "Employee") ? "Hello" : 
            (login == "Director") ? "Greetings" :
            (login == "") ? "No login" : 
            '';