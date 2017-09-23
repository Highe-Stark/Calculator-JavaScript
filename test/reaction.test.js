/**
 * Created by Higher Stark on 2017/8/1.
 */

var calculate = require("../src/reaction.js");
var expression = require("../src/grammer.js");
var token = require("../src/token.js");
var tokenStream = require("../src/token.js");
var expect = chai.expect;
import {to, be, equal} from 'chai';
require("../node_modules/jasmine/bin/jasmine.src");

describe("Calculator function", function(){
    it ("test input 1", function(){
        let res = calculate("1");
        expect(res).to.be.equal(1);
    });

    it("test input -2", function(){
        let res = calculate("-2");
        expect(res).to.be.equal(-2);
    });

    it ("test input 1+3", function(){
        let res = calculate("1+3");
        expect(res).to.be.equal(4);
    });

    it("test input 1 - 5", function(){
        let res = calculate("1-5");
        expect(res).to.be.equal(-4);
    });

    it("test input 3.5*6.5", function(){
        let res = calculate("3.5*6.5");
        expect(res).to.be.equal(3.5 * 6.5);
    });

    it("test input 4.0/2.0",function(){
        let res = calculate("4.0/2.0");
        expect(res).to.be.equal(2);
    });

    it("test input (9.04+6.02*25-6.4/3.2)",function(){
        let res = calculate("(9.04+6.02*25-6.4/3.2)");
        expect( res ).to.be.equal(9.04+6.02*25-6.4/3.2);
    });

});

