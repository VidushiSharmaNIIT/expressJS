const express = require('express')
//const supertest = require('supertest')
const request = require('supertest');
const expect = require('chai').expect;
const sinon = require('sinon')
const model = require('../model/user')
const modelstub = sinon.stub(model, 'find')
const app = require('../app.js')

//const url=request('http://localhost:3000')
const url =request.agent('http://localhost:3000')
/*describe('test my get function',function(){
	beforeEach(function(){
		modelstub.yields(null,[{'userid': 'vidu','password':123,'state':'himachal'}])
	})
	it('it should find users',function(done){
		url
		.get('/users')
		.expect(200)
		.expect('Content-Type',/json/)
		.end(function(err,res){
			if(err) return done(err)
				expect(res.body[0].userid).to.be.equal('vidu')
			  expect(res.body[0].password).to.be.equal(123)
			  expect(res.body[0].state).to.be.equal('himachal')
			  done()
		})
	})
})*/

describe('test my get function', () => {
    it('it should find users', function(done) {
        modelstub.yields(null, [{ userid: 'vidu', password: 123, state: 'himachal' }])
        request(app)
            .get('/users')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err)
                expect(res.body[0].userid).to.be.equal('vidu')
                expect(res.body[0].password).to.be.equal(123)
                expect(res.body[0].state).to.be.equal('himachal')
                done()
            })
    })
})