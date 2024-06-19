var a = 10;
var b = 20;

var res1 = a + ++b;
console.log(res1);

console.log("--------------------------");


var res = a + b++;
console.log(res);

//Decrement Opertator

var x=100;
var y=50;

var res1 = --x + --y; //99 + 49 =148
console.log(res1); //x=99 y=49

var res2 = x-- + y--; //x=99 y=49
console.log(res2); //x=98 y=48

console.log(x,y)