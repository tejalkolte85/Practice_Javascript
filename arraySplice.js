var arr =[1,"tejal", {city:"pune"} , 21,"MH"]

console.log(arr);

//add element any specific location

// arr.splice(2,1); //only one element remove

// arr.splice(1,3) //remove multiple

arr.splice(2,0,{city:"pune"}) //add element


console.log(arr);

