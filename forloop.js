// var num = 3
// for(x=1; x<=10 ;x++){
//     var res = x * num;
//     console.log(`${num} * ${x} = ${res}`);
// }




//prime or not

function checkPrime(num){
    for(i=2;i< num ;i++){
        if(num % 1 == 0){
            console.log("Prime")
        }
        else{
            console.log("Not prime")
        }
    }

}
checkPrime(8)