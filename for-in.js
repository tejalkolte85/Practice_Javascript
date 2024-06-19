var obj ={
    name:"Tejal",
    id: 101,
    gender:"F",
    
}
for(var x in obj){
    console.log(x , ":" , obj[x]); //obj.x  . operator will not work here
}