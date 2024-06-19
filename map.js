var arr=[100,200,300,500,23]
// var newArray = arr.map(function(element, index){

//     return element*50;
// })

// console.log(newArray);


var filteredArray = arr.filter(function(element , index){
    return element < 400 ;
})

console.log(filteredArray)