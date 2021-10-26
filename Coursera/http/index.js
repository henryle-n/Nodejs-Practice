import http from 'http';
const hostname = 'localhost';
const port = '3000';

let chargeUnit = 2.3;
let volume = 101.7;

var resultCalc = (c, v) => {
    return {cost : c * v}
}

const server = http.createServer((req, res) => {
    console.log("req headers", req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`
    <html>
    <body>
    <p> ${resultCalc(chargeUnit, volume).cost} </p>
    <h1>End of server response</h1>
    </body>
    </html>`)
})

server.listen(port, hostname, ()=>{
    console.log(`server is running at http://${hostname}:${port}`);
})