function evenoddNumber(num){
    if(num % 2 == 0){
        console.log("Number is even"); //check condition if condition is true only this line execute
    }else{
        console.log("Number id odd");
    }
}
evenoddNumber(101);


console.log("------------The following is else if statement---------------")

function demo(message){
    if(message === "gm"){
        console.log("Good morning");
    }
    else if(message === "ga"){
        console.log("Good Afternoon");
    }
    else if(message === "ge"){
        console.log("Good afternoon");
    }
    else if(message === "gn"){
        console.log("Good Night");
    }
    else{
        console.log("There is nothing")
    }

}
demo("gn");


console.log("----------------------------------------");

function wish(message){
    switch(message){
        case "gm":
            {
                console.log("Good morning");
            }
        break;
        case "ga":
            {
                console.log("Good afternoon");
            }
        break;
        case "gn":
            {
                console.log("good night");

            }
        break;
        default:{
            console.log("There is nothing wish")
        }
    }

}
wish("gn");