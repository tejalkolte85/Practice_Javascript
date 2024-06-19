function checkPrime(num){
    var isPrime= true
    if(num < 1){
        console.log("enter positive number");
    }
    else if(num === 1 ){
        console.log("1 is not prime number")
    }else if( num > 1){
        for(var i=2;i < num; i++){
            if(num % 2 == 0){
                isPrime=false;
            }
        }
    }
    if(isPrime){
        console.log("Given number is prime");

    }else{
        console.log("Given number are not prime")
    }
    
}

checkPrime(-8);