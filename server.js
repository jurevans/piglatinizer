let http = require('http');
let app = require('./app')();

let port = process.env.PORT || 3000;
let host = process.env.HOST || '0.0.0.0';

http.createServer(app).listen(port, host, () => {
	console.log("Server ready at http://localhost:" + port);
});
