// var id = 101;
// console.log(typeof id);





function demo1(){
    var city= "Pune";
    console.log(city);
}


// Dynamically
function demo(x,y){
    // var x = 10;

    // var Y = 20;

    var res = x + y;
console.log(res);
}

function add(x,y){
    console.log(x+y)
}

function fn(f){
    console.log(f);
    f();
    f();
}
//anonymous function- function without name
fn(function(){
    var city= "Pune";
    console.log(city);
});

//fn(add); callback function