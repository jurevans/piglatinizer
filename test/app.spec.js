import 'babel-polyfill';
let chai = require('chai');
let should = chai.should();
let http = require('chai-http');
let server = require('../app');
let PigLatin = require('../src/piglatin.js');

chai.use(http);

/* Test the testing framework */
describe('PigLatin', () => {
    describe('API', () => {
        it('Return empty object on /api GET', (done) => {
            chai.request(server)
                .get('/api')
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('Object');
                });
            done();
        });

        it('Return object on /api/<word> GET', (done) => {
            chai.request(server)
                .get('/api/test')
                .end( (err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('Object');
                });
            done();
        });



    });
});
