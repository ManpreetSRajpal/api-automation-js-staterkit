import chai from "chai";
import supertest from "supertest";

global.should = chai.should();
global.mocha = require("mocha");
global.supertest = supertest;
//global.retryCount = 1;
global.logger = require("../config/winston");
