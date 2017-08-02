/**
 * Created by Higher Stark on 2017/8/1.
 */

var calculate = require("../reaction.js");
var expect = require("../node_modules/chai/bin/chai").expect;
require("../../node_modules/jasmine/bin/jasmine.js");

describe("Calculator function", function(){
    it ("test input 1", function(){
        expect(calculate(1)).toEqual(1);
    });

    it("test input -2", function(){
        let ts = tokenStream.construct("-2");
        expect(-2).toEqual(expression(ts));
    });

    it ("test input 1+3", function(){
        let ts = tokenStream.construct("1+3");
        expect(4).toEqual(expression(ts));
    });

    it("test input 1 - 5", function(){
        let ts = tokenStream.construct("1-5");
        expect(-4).toEqual(expression(ts));
    });

    it("test input 3.5*6.5", function(){
        let ts = tokenStream.construct("3.5*6.5");
        expect( 3.5 * 6.5).toEqual(expression(ts));
    });

    it("test input 4.0/2.0",function(){
        let ts = tokenStream.construct("4.0/2.0");
        expect(4.0 /2.0).toEqual(expression(ts));
    });

    it("test input (9.04+6.02*25-6.4/3.2)",function(){
        let ts = tokenStream.construct("(9.04+6.02*25-6.4/3.2)");
        expect( 9.04+6.02*25-6.4/3.2 ).toEqual(expression(ts));
    });

});

