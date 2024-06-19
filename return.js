function add(x,y){
    var res = x + y;

    return function()//in this function does not have any name so we call that function uisng variable name  ie resoutput
    { 
        console.log("im anonymous function")
    };
}

var resoutput = add(10 , 30);
console.log(resoutput);
resoutput();