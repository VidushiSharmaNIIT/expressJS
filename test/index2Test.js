const express = require('express')
const request = require('supertest');
const expect = require('chai').should();
//const expect = require('chai').expect;
const sinon = require('sinon')
const model = require('../model/user')
//const modelstub = sinon.stub(model, 'find')
const app = require('../app.js')
const url =request.agent('http://localhost:3000')

describe('test my post function',function(){
	it('it should create users',function(done){
		request(app)
      .post('/user')
      .send({"userid":"vidushi","password": 1235, "state": 'himachalPradesh'})
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.have.property('userid', 'vidushi');
        res.body.should.have.property('password', 1235);
        res.body.should.have.property('state', 'himachalPradesh');
        done();
      });
	})
})