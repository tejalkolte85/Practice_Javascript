var details=[
    {
        brand:"Apple",
        model:"iphoe",
        price:50000
    },
    {
        brand:"Samsung",
        model:"Galaxy",
        price:10000
    },
    {
        brand:"Vivo",
        model:"T2x",
        price:50000
    },
    {
        brand:"Apple",
        model:"iphoe14",
        price:90000
    }];

    var newData = details.filter(function(element,index) //inside that element we have 1 objebt inside that object we have 3 property ie brand price
    {
        
        // return element.brand == "Apple";
        return element.price >= 50000

    });

    console.log(newData);