let http = require('http');
let app = require('./app')();

let port = process.env.PORT || 3000;
let host = process.env.HOST || '0.0.0.0';

let cat = require('./src/cat.js');

http.createServer(app).listen(port, host, () => {
    let output = `Server ready at http://localhost: ${port}`;
	console.log(output, cat.get());
});
