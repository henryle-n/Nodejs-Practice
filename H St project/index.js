const fs = require('fs');

var inputData = [{
    tarSubClass
}]
var tarSubClass = "OBDF06";
var holeSize = 12;
var specGrav = 1.2;



var result;
fs.readFile('./priceBook.json', 'utf-8', (err, jsonString) => {
    if (err) throw err;
    else {
        var data = JSON.parse(jsonString);
        result = data.filter(filterArr);
    }            
    console.log(`this is result`, result);
    price = Math.max.apply(Math, result.map(function(o) { return o.Rate; }))
    console.log(`this is price: ${price}`)

})

function filterData(d) {
    return Object.keys(this).every(key => d[key] == this[key]);
 };
