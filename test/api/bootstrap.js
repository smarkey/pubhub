global.chai = require('chai');
global.expect = global.chai.expect;
global.sinon = require('sinon');
global.request = require('supertest');
global.chai.use(require('sinon-chai'));
