module.exports = () => {
    const express = require('express');
    const bodyParser = require('body-parser');
    const PigLatin = require('./src/piglatin');
    const app = express();

    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({ extended: true }) );

    /* Static assets */
    app.use( express.static(__dirname + '/dist') );

    app.get('/api', (req, res) => {
        let data = {
            request : '',
            result : ''
        };

        res.setHeader('Content-Type', 'application/json');
        res.send( JSON.stringify( data ) );
	});

    app.get('/api/:word', (req, res) => {
        let data = {
            request: req.params.word,
            result: PigLatin.pigLatinizer(req.params.word)
        };

        res.setHeader('Content-Type', 'application/json');
        res.send( JSON.stringify( data ) );
    });

    app.use( (req, res, next) => {
        res.set('X-Powered-By', '');
        next();
    });

    return app;

}
