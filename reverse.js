function reverseString(str){
    var reverse = "";
    for(var i = str.length - 1; i >= 0 ; i--){
        reverse += str[i];

    }
    return reverse;
    
}
reverseString("hello");
console.log(reverseString("Tejal"));

// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString('hello');

// console.log(reverseString('hello'));
