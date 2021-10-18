import chai from 'chai';
import supertest from 'supertest';

global.should = chai.should();
global.mocha = require('mocha');
global.supertest = supertest;
global.retryCount = 1;

global.baseUrl = supertest(process.env.baseUrl == undefined
    ? 'http://localhost:3000/'
    : process.env.baseUrl);

global.logger=require('./winston');