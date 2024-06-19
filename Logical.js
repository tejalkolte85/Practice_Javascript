var details = [
    {
        phone:"Samsung",
        price:18000,
        brand:"Galaxy"
    },
    {
        phone:"Apple",
        price:118000,
        brand:"iphone15"
    },
    {
        phone:"vivo",
        price:18000,
        brand:"t2pro"
    },
    {
        phone:"Samsung",
        price:80000,
        brand:"Galaxy 24"
    },
    {
        phone:"Samsung",
        price:100000,
        brand:"Galaxy 23"
    },
    {
        phone:"Samsung",
        price:10000,
        brand:"Galaxy 22"
    }, 
    {
        phone:"Apple",
        price:180000,
        brand:"iphone14"
    },
];

var filterData = details.filter(function(element){
    return (element.phone == "Samsung" || element.phone == "Apple") && element.price > 80000;
})

console.log(filterData);