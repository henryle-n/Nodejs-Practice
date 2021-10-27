import {rect} from './rectangle.js';

console.log("----------------------------------------------");
function solveRect (a, b) {
        
    rect(a, b, (err, rectangle) => {
        if (err) console.log("ERROR:: ", err.message);
        else {
            console.log (`Solving rectangle ... a= ${a} and b = ${b}`);
            console.log (`${rectangle.message}`);
            console.log("Area is :: " + rectangle.area());
            console.log("Parameter is :: " + rectangle.parameter());
            
        }
        console.log("----------------------------------------------");
    })
    // console.log("this is after rect is callback");
}

solveRect(-1,3);
solveRect(4,6);
solveRect(1,5);
solveRect(2,8);


